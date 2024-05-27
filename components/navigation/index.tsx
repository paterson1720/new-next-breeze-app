"use client";

import Link from "next/link";
import { Session } from "next-auth";
import Image from "next/image";

import appConfig from "@/app/app.config";
import { navigationRoutes } from "@/app/routes";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Role } from "@/lib/types/enums";
import { userHasRoles } from "@/lib/auth/helpers";

import LoginButton from "./login-button";
import DesktopNavigation from "./desktop-navigation";
import DesktopProfileMenu from "./desktop-profile-menu";
import MobileNavigationMenuPanel from "./mobile-nav-menu-panel";
import { CurrentUser } from "@/actions/users";

interface Props {
  session: Session | null;
}

function filterRoutesBaseOnAuthenticationStatus(session: Session | null): typeof navigationRoutes {
  return navigationRoutes.filter((route) => {
    const routeRoles = route.roles as Role[];
    if (!route.protected) return true;
    if (route.protected && !session) return false;
    if (userHasRoles(session?.user as CurrentUser, routeRoles)) return true;
    return false;
  });
}

export default function PlatformNavigation({ session }: Props) {
  const filteredRoutes = filterRoutesBaseOnAuthenticationStatus(session);

  return (
    <nav className="bg-gray-100 dark:bg-gray-950 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href={appConfig.pages.home} className="flex-shrink-0 h-12 w-12">
              <Image
                src={appConfig.brand.logoUrl}
                alt={appConfig.brand.appName}
                width={100}
                height={100}
              />
            </Link>
            <DesktopNavigation routes={filteredRoutes} />
          </div>
          <div className="flex gap-4">
            <div className="hidden md:block">
              <div className="ml-4 flex items-center gap-4 md:ml-6">
                <DesktopProfileMenu user={session?.user || null} />
                <LoginButton session={session} visible={!session} />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <MobileNavigationMenuPanel user={session?.user || null} routes={filteredRoutes} />
            </div>
            <ThemeModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
