import NextAuth from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import appConfig from "@/app/app.config";
import prisma from "@/lib/prisma";
import config from "./config";
import { CurrentUser } from "@/actions/users";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update: update,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    /**
     * Relative time from now in seconds when to expire the session
     * and force a re-authentication. Set to 30 days by default.
     * You can increase or decrease the time as you see fit.
     */
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, trigger, session }) {
      /**
       * When a user sign in or signup, we save the user ID and ROLES in the JWT token.
       * We can use the ID later to query the DB and get the user info,
       * and the ROLES for access control.
       */
      if (["signUp", "signIn"].includes(String(trigger))) {
        let user = await prisma.user.findUnique({
          where: { id: token.sub },
          include: {
            roles: {
              select: {
                role: true,
              },
            },
          },
        });

        let defaultRoles = appConfig.auth.defaultRoles;

        if (user && !user?.roles?.length) {
          user = await prisma.user.update({
            where: { id: user.id },
            include: {
              roles: {
                select: {
                  role: true,
                },
              },
            },
            data: {
              roles: {
                create: defaultRoles.map((role) => ({
                  role: {
                    connect: { name: role },
                  },
                })),
              },
            },
          });
        }

        if (!user) return token;
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.roles = user.roles;
      }
      /**
       * When a user profile is updated, se save to the DB and we call the
       * auth.update() method. This method will trigger the "update" callback
       * and we can update the JWT token with the updated info.
       */
      if (trigger === "update" && session?.user) {
        token.name = session.user.name;
        token.email = session.user.email;
        token.roles = session.user.roles;
      }

      return token;
    },
    async session({ session, token }) {
      /**
       * After storing the user ID and ROLES in the JWT token, we can access
       * them here and add them to the session object. This way we can
       * access them in the client side with when we call auth().
       */
      if (session.user) {
        session.user.id = String(token.id);
        session.user.name = token.name as string;
        session.user.roles = token.roles as CurrentUser["roles"];
      }

      return session;
    },
  },

  pages: {
    signIn: appConfig.pages.signin,
    signOut: appConfig.pages.signout,
  },
  ...config,
});
