"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Role } from "@/lib/types/enums";

import appConfig from "@/app/app.config";
import { auth, signIn, signOut } from "@/lib/auth";
import { userHasRoles } from "@/lib/auth/helpers";

type SignInButtonProps = {
  redirectUrl?: string;
};

export async function getCurrentSession() {
  const session = await auth();
  return session;
}

export async function isUserLoggedIn() {
  const session = await auth();
  const userIsLoggedIn = Boolean(session);
  return userIsLoggedIn;
}

export async function signinWithGoogle({ redirectUrl }: SignInButtonProps = {}) {
  return signIn("google", {
    redirectTo: redirectUrl || appConfig.pages.dashboard,
  });
}

export async function logout() {
  await signOut({ redirect: false });
  revalidatePath("/");
  redirect(`${appConfig.redirects.afterSignout}?signed_out=true`);
}

/**
 * This function is used to check if the current user is signed in and has the required roles.
 * If the user is not signed in, the user will be redirected to the signin page.
 * @param Roles[]
 * @returns {Promise<{ authorized: boolean; session: Object }>}
 */

export async function requireAuth(Roles: Role[] = []) {
  const session = await auth();

  if (!session) {
    return redirect(appConfig.pages.signin);
  }

  if (Roles.length && !userHasRoles(session.user, Roles)) {
    return { authorized: false, session };
  }

  return { authorized: true, session };
}
