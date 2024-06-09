"use client";

import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.png";
import MobileMenu from "./mobile-menu";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import appConfig from "@/app/app.config";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";

interface Props {
  session?: Session | null;
}

export default function CenteredResponsiveNavbar({ session }: Props) {
  const router = useRouter();

  return (
    <header className="relative w-full z-30 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-1">
            <Link className="inline-flex" href="/" aria-label="Full-Stack-Kit">
              <Image
                className="max-w-none"
                src={LogoImg}
                width={38}
                height={38}
                priority
                alt="Stellar"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex gap-6 grow justify-center flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-gray-400 hover:text-blue-500 px-1 py-2 flex items-center transition duration-150 ease-in-out"
                  href="/#hero"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-gray-400 hover:text-blue-500 px-1 py-2 flex items-center transition duration-150 ease-in-out"
                  href="/#features"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-gray-400 hover:text-blue-500 px-1 py-2 flex items-center transition duration-150 ease-in-out"
                  href="/#stack"
                >
                  Stack
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-gray-400 hover:text-blue-500 px-1 py-2 flex items-center transition duration-150 ease-in-out"
                  href="/#pricing"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop nav cta link */}
          <ul className="flex-1 flex justify-end items-center gap-4">
            <ThemeModeToggle />
            <li>
              <Link
                className="font-medium text-sm p-2 px-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 whitespace-nowrap transition duration-150 ease-in-out"
                href={session ? appConfig.pages.dashboard : appConfig.pages.signin}
              >
                {session ? "Dashboard" : "Sign in"}
              </Link>
            </li>
          </ul>

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
