"use server";

import prisma from "@/lib/prisma";

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id: id },
    include: {
      roles: {
        select: {
          role: true,
        },
      },
    },
  });

  if (!user) {
    throw new Error("User not found!");
  }

  return user;
}
