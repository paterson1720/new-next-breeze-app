"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import appConfig from "@/app/app.config";
import { Button } from "@/components/ui/button";
import Center from "@/components/ui/center";
import Spinner from "@/components/ui/spinner";
import { logout } from "@/actions/auth";

export default function SignOutView() {
  const [isLoading, setIsLoading] = useState(false);

  const onSignOut = () => {
    setIsLoading(true);
    logout();
  };

  if (isLoading) {
    return (
      <Center className="h-full">
        <Center>
          <Spinner visible />
          <p className="text-sm text-gray-500">Signing out...</p>
          <span className="sr-only">Loading...</span>
        </Center>
      </Center>
    );
  }

  return (
    <div className="max-w-md w-full space-y-8 shadow-md rounded-xl p-6 border">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Sign Out
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Are you sure you want to sign out?
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <Button
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onSignOut}
        >
          Yes, sign out
        </Button>
        <Link
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          href={appConfig.pages.dashboard}
        >
          No, go to dashboard
        </Link>
      </div>
    </div>
  );
}
