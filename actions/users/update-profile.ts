"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { getCurrentSession } from "@/actions/auth";
import { ActionResponseStatus } from "@/lib/types/enums";
import { update } from "@/lib/auth";
import prisma from "@/lib/prisma";
import appConfig from "@/app/app.config";

const ValidationSchema = z.object({
  firstName: z.string().trim().min(2, "First name must be at least 2 characters long!"),
  lastName: z.string().trim().min(2, "Last name must be at least 2 characters long!"),
});

export async function updateProfile(data: z.infer<typeof ValidationSchema>) {
  try {
    const session = await getCurrentSession();

    if (!session?.user) {
      return {
        error: true,
        user: null,
        status: ActionResponseStatus.FAILED,
        message: "Not authenticated!",
      };
    }

    let user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        firstName: true,
        lastName: true,
      },
    });

    if (!user) {
      return {
        error: true,
        user: null,
        status: ActionResponseStatus.FAILED,
        message: "User not found!",
      };
    }

    const validatedData = ValidationSchema.parse(data);
    const { firstName, lastName } = validatedData;

    user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        firstName: firstName,
        lastName: lastName,
        name: `${firstName} ${lastName}`,
      },
    });

    await update({
      ...session,
      user: {
        ...session?.user,
        firstName: firstName,
        lastName: lastName,
        name: `${firstName} ${lastName}`,
      },
    });

    revalidatePath(appConfig.pages.account, "layout");

    return {
      user,
      error: null,
      status: ActionResponseStatus.SUCCEEDED,
      message: "Profile updated successfully!",
    };
  } catch (error: any) {
    const defaultError = "Something went wrong! Please try again later.";

    if (error instanceof z.ZodError) {
      return {
        error: true,
        status: ActionResponseStatus.FAILED,
        message: error.issues[0].message,
        user: null,
      };
    }

    return {
      error: true,
      status: ActionResponseStatus.FAILED,
      message: error.message || defaultError,
      user: null,
    };
  }
}
