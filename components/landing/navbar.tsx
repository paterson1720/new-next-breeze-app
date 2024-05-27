"use client";

import { Session } from "next-auth";
import CenteredResponsiveNavbar from "../sections/nav-bars/centered-responsive";

interface Props {
  session: Session | null;
}

export default function Navbar({ session }: Props) {
  return <CenteredResponsiveNavbar session={session} />;
}
