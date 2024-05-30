"use client";

import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { Session } from "next-auth";
import { useRouter, useSearchParams } from "next/navigation";

import appConfig from "@/app/app.config";
import Flex from "@/components/ui/flex";
import FlexCol from "@/components/ui/flex-col";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

import SignInWithGoogle from "./signin-with-google-button";
import { errorCodesMap } from "./signin-error-codes-map";
import OverlaySpinner from "@/components/ui/overlay-spinner";

type ErrorCodesMap = typeof errorCodesMap;
type ErrorCodes = keyof ErrorCodesMap;

interface Props {
  session: Session | null;
}

const apiBaseUrl = appConfig.api.baseUrl;
const authProvidersUrl = appConfig.api.authProviders;
const providersPromise = axios.get(`${apiBaseUrl}${authProvidersUrl}`);

export default function SignInView({ session }: Props) {
  const [providers, setProviders] = useState<Record<string, any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const params = useSearchParams();

  useLayoutEffect(() => {
    const userSignedOut = params.get("signed_out") === "true";
    if (session && !userSignedOut) {
      router.replace(appConfig.redirects.afterSignin);
    }
  }, [router, params, session]);

  useEffect(() => {
    if (session) return;
    const query = new URLSearchParams(window.location.search);
    const error = query.get("error");
    setError(error);

    providersPromise.then((response) => {
      setProviders(response.data);
      setIsLoading(false);
    });
  }, [session]);

  if (isLoading) {
    return <OverlaySpinner />;
  }

  if (!providers) return null;

  return (
    <FlexCol className="p-6 w-full max-w-md shadow-md items-center justify-center border border-secondary rounded-xl">
      <Flex className="max-w-xl w-full">
        <Alert variant="destructive" visible={Boolean(error)}>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {errorCodesMap[error as ErrorCodes] || errorCodesMap.Default}
          </AlertDescription>
        </Alert>
      </Flex>
      <FlexCol className="gap-4">
        <h1 className="text-4xl font-bold text-center">Sign in</h1>
        <p className="text-gray-500 text-center">Choose an option to signin</p>
      </FlexCol>
      <FlexCol className="w-full max-w-sm">
        <FlexCol className="gap-2">
          <SignInWithGoogle visible={Boolean(providers.google)} />
        </FlexCol>
      </FlexCol>
    </FlexCol>
  );
}
