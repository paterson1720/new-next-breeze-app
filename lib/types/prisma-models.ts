import { Prisma } from "@prisma/client";

export type UserGetPayload = Prisma.UserGetPayload<{
  include: {
    roles: {
      select: {
        role: true;
      };
    };
  };
}>;
