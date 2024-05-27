"use client";

import { Fragment, useLayoutEffect } from "react";
import { Session } from "next-auth";
import { useSearchParams, useRouter } from "next/navigation";

import appConfig from "@/app/app.config";

interface Props {
  session: Session | null;
  children: React.ReactNode;
}

export default function SignOutReloader({ session, children }: Props) {
  const router = useRouter();
  const params = useSearchParams();

  useLayoutEffect(() => {
    const userSignedOut = params.get("signed_out") === "true";
    if (session && userSignedOut) {
      router.replace(appConfig.redirects.afterSignout);
      router.refresh();
    }
  }, [router, params, session]);

  return <Fragment>{children}</Fragment>;
}
