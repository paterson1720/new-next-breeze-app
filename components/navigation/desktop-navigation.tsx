import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavigationRoute } from "@/lib/types/routes";
import { Button } from "@/components/ui/button";
import DesktopNavLink from "./desktop-nav-link";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface Props {
  routes: NavigationRoute[];
}

export default function DesktopNavigation({ routes }: Props) {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="ml-10 flex items-baseline space-x-4">
        {routes.map((item) => {
          if (item.children) {
            return (
              <NavigationMenuItem key={item.name}>
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      {item.name}
                      <ChevronDownIcon className="w-4 h-4 ml-2" />
                      <span className="sr-only">{item.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link key={child.name} href={child.path}>
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={item.name}>
              <Link href={item.path} legacyBehavior passHref>
                <DesktopNavLink key={item.name} href={item.path}>
                  {item.name}
                </DesktopNavLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
