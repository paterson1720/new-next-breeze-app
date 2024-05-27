"use client";

import { cn } from "@/lib/utils/tailwind";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

interface Props {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function MobileNavLink({ href, children, onClick }: Props) {
  const pathname = usePathname();
  const isCurrent = pathname === href;

  return (
    <Button
      variant={"ghost"}
      onClick={onClick}
      className={cn("block w-full text-left rounded-md px-3 py-2 text-base font-medium", {
        "bg-gray-900 text-white": isCurrent,
        "hover:bg-gray-700 hover:text-white": !isCurrent,
      })}
    >
      {children}
    </Button>
  );
}
