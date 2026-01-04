import { TRPCError } from "@trpc/server";
import { ENV } from "./env";

export type NotificationPayload = {
  title: string;
  content: string;
};

const TITLE_MAX_LENGTH = 1200;
const CONTENT_MAX_LENGTH = 20000;

const trimValue = (value: string): string => value.trim();
const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const buildEndpointUrl = (baseUrl: string): string => {
  const normalizedBase = baseUrl.endsWith("/")
    ? baseUrl
    : `${baseUrl}/`;
  return new URL(
    "webdevtoken.v1.WebDevService/SendNotification",
    normalizedBase
  ).toString();
};

const validatePayload = (input: NotificationPayload): NotificationPayload => {
  if (!isNonEmptyString(input.title)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification title is required.",
    });
  }
  if (!isNonEmptyString(input.content)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification content is required.",
    });
  }

  const title = trimValue(input.title);
  const content = trimValue(input.content);

  if (title.length > TITLE_MAX_LENGTH) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Notification title must be at most ${TITLE_MAX_LENGTH} characters.`,
    });
  }

  if (content.length > CONTENT_MAX_LENGTH) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Notification content must be at most ${CONTENT_MAX_LENGTH} characters.`,
    });
  }

  return { title, content };
};

/**
 * Dispatches a project-owner notification through the Manus Notification Service.
 * Returns `true` if the request was accepted, `false` when the upstream service
 * cannot be reached (callers can fall back to email/slack). Validation errors
 * bubble up as TRPC errors so callers can fix the payload.
 */
export async function notifyOwner(
  payload: NotificationPayload
): Promise<boolean> {
  const { title, content } = validatePayload(payload);

  if (!ENV.forgeApiUrl) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Notification service URL is not configured.",
    });
  }

  if (!ENV.forgeApiKey) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Notification service API key is not configured.",
    });
  }

  const endpoint = buildEndpointUrl(ENV.forgeApiUrl);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${ENV.forgeApiKey}`,
        "content-type": "application/json",
        "connect-protocol-version": "1",
      },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(
        `[Notification] Failed to notify owner (${response.status} ${response.statusText})${
          detail ? `: ${detail}` : ""
        }`
      );
      return false;
    }

    return true;
  } catch (error) {
    console.warn("[Notification] Error calling notification service:", error);
    return false;
  }
}


export type CustomerEmailPayload = {
  email: string;
  firstName: string;
  lastName: string;
  subject: string;
  htmlContent: string;
};

/**
 * Sends a customer email through the Manus Notification Service.
 * Returns `true` if the request was accepted, `false` when the upstream service
 * cannot be reached. Validation errors bubble up as TRPC errors.
 */
export async function sendCustomerEmail(
  payload: CustomerEmailPayload
): Promise<boolean> {
  const { email, firstName, lastName, subject, htmlContent } = payload;

  if (!email || !email.includes("@")) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Valid customer email is required.",
    });
  }

  if (!subject || subject.trim().length === 0) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Email subject is required.",
    });
  }

  if (!htmlContent || htmlContent.trim().length === 0) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Email content is required.",
    });
  }

  if (!ENV.forgeApiUrl) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Email service URL is not configured.",
    });
  }

  if (!ENV.forgeApiKey) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Email service API key is not configured.",
    });
  }

  const endpoint = buildEndpointUrl(ENV.forgeApiUrl);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${ENV.forgeApiKey}`,
        "content-type": "application/json",
        "connect-protocol-version": "1",
      },
      body: JSON.stringify({
        title: subject,
        htmlContent: htmlContent,
        recipientEmail: email,
        recipientName: `${firstName} ${lastName}`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(
        `[Email] Failed to send customer email to ${email} (${response.status} ${response.statusText})${
          detail ? `: ${detail}` : ""
        }`
      );
      return false;
    }

    return true;
  } catch (error) {
    console.warn("[Email] Error calling email service:", error);
    return false;
  }
}


// Studio email mapping
export const studioEmails: Record<string, string> = {
  "easton": "frontdeskoh001@restore.com",
  "dublin": "frontdeskoh005@restore.com",
  "upper-arlington": "frontdeskoh038@restore.com",
};

// Lead manager email for inquiry copies
const LEAD_MANAGER_EMAIL = "drogovin@restore.com";

export type StudioInquiryPayload = {
  studioId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tier: string;
};

/**
 * Sends a studio inquiry email to the specific studio location.
 * Returns `true` if the request was accepted, `false` when the upstream service
 * cannot be reached.
 */
export async function sendStudioInquiryEmail(
  payload: StudioInquiryPayload
): Promise<boolean> {
  const { studioId, firstName, lastName, email, phone, tier } = payload;

  const studioEmail = studioEmails[studioId];
  if (!studioEmail) {
    console.warn(`No email found for studio: ${studioId}`);
    return false;
  }

  const studioNames: Record<string, string> = {
    "easton": "Easton",
    "dublin": "Dublin",
    "upper-arlington": "Upper Arlington",
  };

  const studioName = studioNames[studioId] || studioId;

  const htmlContent = `
    <h2>New Membership Inquiry</h2>
    <p>A new membership inquiry has been submitted for your studio.</p>
    
    <h3>Customer Information:</h3>
    <ul>
      <li><strong>Name:</strong> ${firstName} ${lastName}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Phone:</strong> ${phone}</li>
      <li><strong>Membership Tier:</strong> ${tier}</li>
    </ul>
    
    <p>Please follow up with this customer to schedule their membership and answer any questions they may have.</p>
    
    <p>Best regards,<br/>Restore Hyper Wellness System</p>
  `;

  if (!ENV.forgeApiUrl) {
    console.error("Email service URL is not configured.");
    return false;
  }

  if (!ENV.forgeApiKey) {
    console.error("Email service API key is not configured.");
    return false;
  }

  const endpoint = buildEndpointUrl(ENV.forgeApiUrl);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${ENV.forgeApiKey}`,
        "content-type": "application/json",
        "connect-protocol-version": "1",
      },
      body: JSON.stringify({
        title: `New Membership Inquiry - ${studioName} Studio`,
        htmlContent: htmlContent,
        recipientEmail: studioEmail,
        recipientName: `${studioName} Studio`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(
        `[Studio Email] Failed to send inquiry email to ${studioEmail} (${response.status} ${response.statusText})${
          detail ? `: ${detail}` : ""
        }`
      );
      return false;
    }

    // Send copy to lead manager
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${ENV.forgeApiKey}`,
          "content-type": "application/json",
          "connect-protocol-version": "1",
        },
        body: JSON.stringify({
          title: `New Membership Inquiry - ${studioName} Studio`,
          htmlContent: htmlContent,
          recipientEmail: LEAD_MANAGER_EMAIL,
          recipientName: "Lead Manager",
        }),
      }).catch((error) => {
        console.warn("[Lead Manager Email] Error sending copy to lead manager:", error);
      });
    } catch (error) {
      console.warn("[Lead Manager Email] Error:", error);
    }

    return true;
  } catch (error) {
    console.warn("[Studio Email] Error calling email service:", error);
    return false;
  }
}

export type AppointmentInquiryPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredLocation: string;
  serviceOfInterest?: string;
};

/**
 * Sends appointment inquiry email to lead manager.
 * Returns `true` if the request was accepted, `false` when the upstream service
 * cannot be reached.
 */
export async function sendAppointmentInquiryEmail(
  payload: AppointmentInquiryPayload
): Promise<boolean> {
  const { firstName, lastName, email, phone, preferredLocation, serviceOfInterest } = payload;

  const htmlContent = `
    <h2>New Appointment Request</h2>
    <p>A new appointment request has been submitted.</p>
    
    <h3>Customer Information:</h3>
    <ul>
      <li><strong>Name:</strong> ${firstName} ${lastName}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Phone:</strong> ${phone}</li>
      <li><strong>Preferred Location:</strong> ${preferredLocation}</li>
      <li><strong>Service of Interest:</strong> ${serviceOfInterest || "Not specified"}</li>
    </ul>
    
    <p>Please follow up with this customer to schedule their appointment and answer any questions they may have.</p>
    
    <p>Best regards,<br/>Restore Hyper Wellness System</p>
  `;

  if (!ENV.forgeApiUrl) {
    console.error("Email service URL is not configured.");
    return false;
  }

  if (!ENV.forgeApiKey) {
    console.error("Email service API key is not configured.");
    return false;
  }

  const endpoint = buildEndpointUrl(ENV.forgeApiUrl);

  try {
    // Send to lead manager
    await fetch(endpoint, {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${ENV.forgeApiKey}`,
        "content-type": "application/json",
        "connect-protocol-version": "1",
      },
      body: JSON.stringify({
        title: `New Appointment Request - ${firstName} ${lastName}`,
        htmlContent: htmlContent,
        recipientEmail: LEAD_MANAGER_EMAIL,
        recipientName: "Lead Manager",
      }),
    }).catch((error) => {
      console.warn("[Lead Manager Email] Error sending appointment inquiry:", error);
    });

    return true;
  } catch (error) {
    console.warn("[Appointment Email] Error calling email service:", error);
    return false;
  }
}
