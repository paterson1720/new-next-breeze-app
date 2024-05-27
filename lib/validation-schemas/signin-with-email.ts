import { z } from "zod";

export const SigninWithEmailFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export type SigninWithEmailFormType = z.infer<typeof SigninWithEmailFormSchema>;
