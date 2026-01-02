import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createMembershipLead } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
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
});

export type AppRouter = typeof appRouter;
