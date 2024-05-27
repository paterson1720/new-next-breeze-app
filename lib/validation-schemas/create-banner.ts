import { z } from "zod";

export const CreateBannerFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters.",
    })
    .max(250, {
      message: "Description must not be more than 250 characters.",
    }),
  link: z.string().optional(),
  linkText: z.string().optional(),
  isActive: z.boolean().default(false),
});

export type CreateBannerFormType = z.infer<typeof CreateBannerFormSchema>;
