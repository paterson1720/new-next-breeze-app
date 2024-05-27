"use server";

import { getCurrentSession } from "@/actions/auth";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export type CurrentUser = Prisma.UserGetPayload<{
  include: {
    roles: {
      select: {
        role: true;
      };
    };
  };
}>;

export async function getCurrentUser() {
  const session = await getCurrentSession();
  if (!session) return null;

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      roles: {
        select: {
          role: true,
        },
      },
    },
  });

  return user;
}
