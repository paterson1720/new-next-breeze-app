import { CurrentUser } from "@/actions/users";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: Partial<CurrentUser> & {
      id: string;
      roles: CurrentUser["roles"];
    } & DefaultSession["user"];
  }
}
