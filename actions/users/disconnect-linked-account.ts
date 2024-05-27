"use server";

import { revalidatePath } from "next/cache";
import { getCurrentSession } from "@/actions/auth";
import appConfig from "@/app/app.config";
import prisma from "@/lib/prisma";

export default async function disconnectLinkedAccount(accountId: string) {
  const session = await getCurrentSession();

  if (!session) {
    throw new Error("Not authenticated!");
  }

  await prisma.account.delete({
    where: {
      id: accountId,
      userId: session.user.id,
    },
  });

  revalidatePath(appConfig.pages.account);
}
