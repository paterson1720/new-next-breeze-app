import { z } from "zod";
import { Role } from "@/lib/types/enums";

export const EditUserFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  roles: z.array(z.enum([Role.USER, Role.ADMIN])),
  isBanned: z.boolean(),
});

export type EditUserFormType = z.infer<typeof EditUserFormSchema>;
