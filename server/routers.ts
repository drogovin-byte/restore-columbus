import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createMembershipLead, getAllMembershipLeads, getMembershipLeadById, updateMembershipLead, createAppointmentRequest, getAllAppointmentRequests, getAppointmentRequestById, updateAppointmentRequest } from "./db";
import { notifyOwner } from "./_core/notification";

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

          return {
            success: true,
            message: "Request received! We'll call you shortly to confirm your appointment.",
          };
        } catch (error) {
          console.error("Appointment request error:", error);
          throw error;
        }
      }),

    list: staffProcedure
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

    getById: staffProcedure
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
    list: staffProcedure
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

    getById: staffProcedure
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
});

export type AppRouter = typeof appRouter;
