import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createImage, getAllImages, getImageById, updateImage, deleteImage, getImagesByUsage } from "./db";

export const imageRouter = router({
  upload: adminProcedure
    .input(z.object({
      filename: z.string(),
      url: z.string(),
      s3Key: z.string(),
      mimeType: z.string(),
      fileSize: z.number(),
      altText: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      return await createImage({
        filename: input.filename,
        url: input.url,
        s3Key: input.s3Key,
        mimeType: input.mimeType,
        fileSize: input.fileSize,
        altText: input.altText,
      });
    }),

  list: publicProcedure
    .query(async () => {
      return await getAllImages();
    }),

  getById: publicProcedure
    .input(z.number())
    .query(async ({ input }) => {
      return await getImageById(input);
    }),

  getByUsage: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      return await getImagesByUsage(input);
    }),

  updateUsage: adminProcedure
    .input(z.object({
      id: z.number(),
      usage: z.string().optional(),
      usageId: z.string().optional(),
      altText: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      return await updateImage(input.id, {
        usage: input.usage,
        usageId: input.usageId,
        altText: input.altText,
      });
    }),

  delete: adminProcedure
    .input(z.number())
    .mutation(async ({ input }) => {
      return await deleteImage(input);
    }),
});
