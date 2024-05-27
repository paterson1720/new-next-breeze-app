"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils/tailwind";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function DesktopNavLink({ href, children }: Props) {
  const pathname = usePathname();
  const isCurrent = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={cn("rounded-md px-3 py-2 text-sm font-medium", {
        "bg-gray-900 text-white": isCurrent,
        " hover:bg-gray-700 hover:text-white": !isCurrent,
      })}
    >
      {children}
    </Link>
  );
}
