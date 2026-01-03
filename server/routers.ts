import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { createMembershipLead, getAllMembershipLeads, getMembershipLeadById, updateMembershipLead, createAppointmentRequest, getAllAppointmentRequests, getAppointmentRequestById, updateAppointmentRequest, createMembershipSignup, getAllMembershipSignups, getMembershipSignupById, updateMembershipSignup } from "./db";
import { notifyOwner, sendCustomerEmail, sendStudioInquiryEmail } from "./_core/notification";

const adminProcedure = publicProcedure.use(async (opts) => {
  if (opts.ctx.user?.role !== "admin") {
    throw new Error("Unauthorized: Admin access required");
  }
  return opts.next();
});

const staffProcedure = publicProcedure.use(async (opts) => {
  if (!opts.ctx.user) {
    throw new Error("Unauthorized: Authentication required");
  }
  return opts.next();
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  membership: router({
    signup: publicProcedure
      .input(z.object({
        membershipTier: z.string(),
        name: z.string().min(2),
        email: z.string().email(),
        phone: z.string().min(10),
        studioId: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          await createMembershipLead({
            membershipTier: input.membershipTier,
            name: input.name,
            email: input.email,
            phone: input.phone,
          });

          const message = `New ${input.membershipTier} membership inquiry from ${input.name}\n\nEmail: ${input.email}\nPhone: ${input.phone}`;
          
          await notifyOwner({
            title: `New Membership Inquiry: ${input.membershipTier}`,
            content: message,
          });

          // Send email to specific studio if studioId is provided
          if (input.studioId) {
            const nameParts = input.name.split(" ");
            const firstName = nameParts[0];
            const lastName = nameParts.slice(1).join(" ") || "";
            await sendStudioInquiryEmail({
              studioId: input.studioId,
              firstName,
              lastName,
              email: input.email,
              phone: input.phone,
              tier: input.membershipTier,
            });
          }

          return {
            success: true,
            message: "Thank you! We will contact you soon.",
          };
        } catch (error) {
          console.error("Membership signup error:", error);
          throw error;
        }
      }),
  }),

  appointments: router({
    submit: publicProcedure
      .input(z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(10),
        preferredLocation: z.string().min(1),
        serviceOfInterest: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          await createAppointmentRequest({
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            phone: input.phone,
            preferredLocation: input.preferredLocation,
            serviceOfInterest: input.serviceOfInterest,
          });

          const message = `New appointment request from ${input.firstName} ${input.lastName}\n\nEmail: ${input.email}\nPhone: ${input.phone}\nPreferred Location: ${input.preferredLocation}\nService: ${input.serviceOfInterest || "Not specified"}`;
          
          await notifyOwner({
            title: `New Appointment Request from ${input.firstName} ${input.lastName}`,
            content: message,
          });

          // Send confirmation email to customer
          const customerEmailContent = `<html><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #1B5E7F;">Appointment Request Received</h2>
              <p>Hi ${input.firstName},</p>
              <p>Thank you for your interest in Restore Hyper Wellness Columbus! We've received your appointment request.</p>
              
              <h3>Your Information:</h3>
              <ul>
                <li><strong>Name:</strong> ${input.firstName} ${input.lastName}</li>
                <li><strong>Email:</strong> ${input.email}</li>
                <li><strong>Phone:</strong> ${input.phone}</li>
                <li><strong>Preferred Location:</strong> ${input.preferredLocation}</li>
                <li><strong>Service of Interest:</strong> ${input.serviceOfInterest || "Not specified"}</li>
              </ul>
              
              <p><strong>What's Next?</strong></p>
              <p>Our wellness team will reach out to you within 24 hours to:</p>
              <ul>
                <li>Confirm your preferred appointment time</li>
                <li>Answer any questions you may have</li>
                <li>Provide information about our services and memberships</li>
              </ul>
              
              <p>If you need to reach us sooner, feel free to call us directly at <strong>614-944-9041</strong> (Easton) or visit our website.</p>
              
              <p>Thank you for choosing Restore Hyper Wellness Columbus!</p>
              <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                Restore Hyper Wellness Columbus<br>
                Proudly serving Columbus, OH since 2019
              </p>
            </div>
          </body></html>`;
          
          await sendCustomerEmail({
            email: input.email,
            firstName: input.firstName,
            lastName: input.lastName,
            subject: "Appointment Request Received - Restore Hyper Wellness Columbus",
            htmlContent: customerEmailContent,
          }).catch((error) => {
            console.error("[Email] Failed to send customer confirmation email to", input.email, ":", error);
          });

          return {
            success: true,
            message: "Request received! We'll call you shortly to confirm your appointment.",
          };
        } catch (error) {
          console.error("Appointment request error:", error);
          throw error;
        }
      }),

    list: publicProcedure
      .input(z.object({
        status: z.string().optional(),
        search: z.string().optional(),
      }))
      .query(async ({ input }) => {
        return await getAllAppointmentRequests({
          status: input.status,
          search: input.search,
        });
      }),

    getById: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return await getAppointmentRequestById(input);
      }),

    updateStatus: adminProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "contacted", "scheduled", "completed", "cancelled"]),
      }))
      .mutation(async ({ input }) => {
        return await updateAppointmentRequest(input.id, { status: input.status });
      }),

    updateNotes: adminProcedure
      .input(z.object({
        id: z.number(),
        notes: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return await updateAppointmentRequest(input.id, { notes: input.notes });
      }),
  }),

  inquiries: router({
    list: publicProcedure
      .input(z.object({
        status: z.string().optional(),
        tier: z.string().optional(),
        search: z.string().optional(),
      }))
      .query(async ({ input }) => {
        return await getAllMembershipLeads({
          status: input.status,
          tier: input.tier,
          search: input.search,
        });
      }),

    getById: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return await getMembershipLeadById(input);
      }),

    updateStatus: adminProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "contacted", "converted", "not_interested"]),
      }))
      .mutation(async ({ input }) => {
        return await updateMembershipLead(input.id, { status: input.status });
      }),

    updateNotes: adminProcedure
      .input(z.object({
        id: z.number(),
        notes: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return await updateMembershipLead(input.id, { notes: input.notes });
      }),

    assign: adminProcedure
      .input(z.object({
        id: z.number(),
        assignedToId: z.number().nullable(),
      }))
      .mutation(async ({ input }) => {
        return await updateMembershipLead(input.id, { assignedToId: input.assignedToId });
      }),

    exportCsv: adminProcedure
      .input(z.object({
        status: z.string().optional(),
        tier: z.string().optional(),
      }))
      .query(async ({ input }) => {
        const leads = await getAllMembershipLeads({
          status: input.status,
          tier: input.tier,
        });

        const headers = ["ID", "Name", "Email", "Phone", "Tier", "Status", "Assigned To", "Created", "Updated"];
        const rows = leads.map(lead => [
          lead.id,
          lead.name,
          lead.email,
          lead.phone,
          lead.membershipTier,
          lead.status,
          lead.assignedToId || "",
          new Date(lead.createdAt).toLocaleDateString(),
          new Date(lead.updatedAt).toLocaleDateString(),
        ]);

        const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");
        return csv;
      }),
  }),

  membershipSignups: router({
    submit: publicProcedure
      .input(z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(10),
        studioId: z.string().min(1),
        goal: z.string().min(1),
        membershipTier: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        try {
          await createMembershipSignup({
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            phone: input.phone,
            studioId: input.studioId,
            goal: input.goal,
            membershipTier: input.membershipTier,
          });

          const message = `New membership sign-up from ${input.firstName} ${input.lastName}\n\nEmail: ${input.email}\nPhone: ${input.phone}\nStudio: ${input.studioId}\nGoal: ${input.goal}\nMembership Tier: ${input.membershipTier}`;
          
          await notifyOwner({
            title: `New Membership Sign-up: ${input.membershipTier}`,
            content: message,
          });

          // Send email to specific studio
          await sendStudioInquiryEmail({
            studioId: input.studioId,
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            phone: input.phone,
            tier: input.membershipTier,
          });

          // Send confirmation email to customer
          const customerEmailContent = `<html><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #1B5E7F;">Membership Sign-up Received</h2>
              <p>Hi ${input.firstName},</p>
              <p>Thank you for your interest in Restore Hyper Wellness Columbus! We have received your membership sign-up request.</p>
              
              <h3>Your Information:</h3>
              <ul>
                <li><strong>Name:</strong> ${input.firstName} ${input.lastName}</li>
                <li><strong>Email:</strong> ${input.email}</li>
                <li><strong>Phone:</strong> ${input.phone}</li>
                <li><strong>Preferred Studio:</strong> ${input.studioId}</li>
                <li><strong>Health Goal:</strong> ${input.goal}</li>
                <li><strong>Membership Tier:</strong> ${input.membershipTier}</li>
              </ul>
              
              <p><strong>What is Next?</strong></p>
              <p>Our team will contact you within 24 hours to confirm your membership and answer any questions you may have about your selected tier and how we can help you achieve your health goals.</p>
              
              <p>If you need to reach us sooner, feel free to call us directly at <strong>614-944-9041</strong> (Easton) or visit our website.</p>
              
              <p>Thank you for choosing Restore Hyper Wellness Columbus!</p>
              <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                Restore Hyper Wellness Columbus<br>
                Proudly serving Columbus, OH since 2019
              </p>
            </div>
          </body></html>`;
          
          const emailResult = await sendCustomerEmail({
            email: input.email,
            firstName: input.firstName,
            lastName: input.lastName,
            subject: "Membership Sign-up Received - Restore Hyper Wellness Columbus",
            htmlContent: customerEmailContent,
          }).catch((error) => {
            console.error("[Email] Failed to send customer confirmation email to", input.email, ":", error);
            return false;
          });
          
          if (!emailResult) {
            console.warn("[Email] Email sending returned false for", input.email);
          } else {
            console.log("[Email] Successfully sent confirmation email to", input.email);
          }

          return {
            success: true,
            message: "Thank you for signing up! We will contact you shortly to confirm your membership.",
          };
        } catch (error) {
          console.error("Membership signup error:", error);
          throw error;
        }
      }),

    list: publicProcedure
      .input(z.object({
        status: z.string().optional(),
        studioId: z.string().optional(),
        search: z.string().optional(),
      }))
      .query(async ({ input }) => {
        return await getAllMembershipSignups({
          status: input.status,
          studioId: input.studioId,
          search: input.search,
        });
      }),

    getById: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return await getMembershipSignupById(input);
      }),

    updateStatus: adminProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "contacted", "converted", "not_interested"]),
      }))
      .mutation(async ({ input }) => {
        return await updateMembershipSignup(input.id, { status: input.status });
      }),

    updateNotes: adminProcedure
      .input(z.object({
        id: z.number(),
        notes: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return await updateMembershipSignup(input.id, { notes: input.notes });
      }),
  }),
});

export type AppRouter = typeof appRouter;
