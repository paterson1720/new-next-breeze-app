import { AnnouncementType } from "@/lib/types/enums";
import { z } from "zod";

export const CreateAnnouncementFormSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 2 characters.",
  }),
  content: z
    .string()
    .min(100, {
      message: "Description must be at least 10 characters.",
    })
    .max(2500, {
      message: "Description must not be more than 2500 characters.",
    }),
  isActive: z.boolean().default(false),
  type: z.enum([
    AnnouncementType.FIX,
    AnnouncementType.NEW,
    AnnouncementType.UPDATE,
    AnnouncementType.IMPROVEMENT,
  ]),
});

export type CreateAnnouncementFormType = z.infer<typeof CreateAnnouncementFormSchema>;
