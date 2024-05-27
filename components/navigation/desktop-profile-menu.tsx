"use client";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import appConfig from "@/app/app.config";
import { Role } from "@/lib/types/enums";

import { Badge } from "../ui/badge";
import { menuOptions } from "./menu-options-data";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Session } from "next-auth";

interface Props {
  user: Session["user"] | null;
}

export default function DesktopProfileMenu({ user }: Props) {
  if (!user) return null;

  const userRolesNames = user.roles.map((role) => role.role.name);

  return (
    <DropdownMenu>
      {userRolesNames.includes(Role.ADMIN) && <Badge variant="destructive">admin</Badge>}
      <span className="text-muted-foreground">{user?.name?.split(" ")[0]}</span>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-9 h-9">
          <span className="sr-only">Open user menu</span>
          <AvatarImage src={user?.image || undefined} alt={user.name || ""} />
          <AvatarFallback className="bg-purple-600 capitalize">
            {user.name?.charAt(0) || "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="truncate">{user.name}</span>
            <span className="text-sm text-muted-foreground">{user.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {menuOptions.map((option) => (
            <DropdownMenuItem key={option.name} asChild>
              <Link href={option.path} className="flex items-center">
                <option.Icon className="mr-2 h-4 w-4" />
                <span>{option.name}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={appConfig.pages.signout} className="flex items-center">
            <ArrowLeftEndOnRectangleIcon className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
