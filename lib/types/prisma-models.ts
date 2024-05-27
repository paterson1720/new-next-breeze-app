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

export type BannerGetPayload = Prisma.BannerGetPayload<{}>;

export type AnnouncementGetPayload = Prisma.AnnouncementGetPayload<{
  include: {
    updatedByUser: {
      select: {
        name: boolean;
        image: boolean;
      };
    };
  };
}>;
