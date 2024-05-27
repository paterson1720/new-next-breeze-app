"use client";

import Image from "next/image";

import { NavigationRoute } from "@/lib/types/routes";

import { menuOptions } from "./menu-options-data";
import MobileNavLink from "./mobile-nav-links";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@/lib/hooks";
import MobileNavigationMenuButton from "./mobile-nav-menu-button";
import appConfig from "@/app/app.config";
import { Separator } from "../ui/separator";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { Session } from "next-auth";

interface Props {
  user: Session["user"] | null;
  routes: NavigationRoute[];
}

export default function MobileNavigationMenuPanel({ user, routes }: Props) {
  const { isOpen, close, toggle } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <MobileNavigationMenuButton open={isOpen} onClick={toggle} />
      {isOpen ? (
        <div className="md:hidden w-full absolute z-50 left-0 top-20 bg-background border-b shadow-xl">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {routes.map((item) => {
              if (item.children) {
                return item.children.map((child) => (
                  <MobileNavLink
                    key={child.name}
                    href={child.path || "#"}
                    onClick={() => {
                      router.push(child.path);
                      close();
                    }}
                  >
                    {child.name}
                  </MobileNavLink>
                ));
              }
              return (
                <MobileNavLink
                  key={item.name}
                  href={item.path || "#"}
                  onClick={() => {
                    router.push(item.path);
                    close();
                  }}
                >
                  {item.name}
                </MobileNavLink>
              );
            })}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            {user ? (
              <div className="flex items-center px-5">
                <div className="flex-shrink-0 h-10 w-10 rounded-full">
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={String(user?.image || "/images/avatar.jpeg")}
                    alt={String(user?.name)}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none dark:text-white">
                    {user?.name}
                  </div>
                  <div className="text-sm font-medium leading-none mt-2 dark:text-gray-300">
                    {user?.email}
                  </div>
                </div>
              </div>
            ) : null}

            <div className="mt-3 space-y-1 px-2">
              {menuOptions.map((item) => (
                <Button
                  className="block w-full text-left rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-white"
                  key={item.name}
                  variant="ghost"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => {
                    router.push(item.path);
                    close();
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Separator />
              <Button
                className="flex w-full justify-start items-center rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                variant="ghost"
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onClick={() => {
                  router.push(appConfig.pages.signout);
                  close();
                }}
              >
                <ArrowLeftEndOnRectangleIcon className="w-4 h-4 mr-2" />
                <span>Log out</span>
                <span className="sr-only">Log out</span>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
