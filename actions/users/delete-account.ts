"use server";

import appConfig from "@/app/app.config";
import { signOut } from "@/lib/auth";
import prisma from "@/lib/prisma";

export default async function deleteAccount(userId: string) {
  const userData = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!userData) {
    throw new Error("User not found!");
  }

  await prisma.user.delete({
    where: { id: userId },
    include: {
      accounts: true,
      roles: true,
    },
  });

  await signOut({
    redirectTo: appConfig.pages.home,
  });
}
