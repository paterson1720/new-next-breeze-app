import { getCurrentSession } from "@/actions/auth";
import PlatformNavigation from "@/components/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack-Kit - Platform",
  description: "Welcome to Full-Stack-Kit!",
};

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  const session = await getCurrentSession();

  return (
    <div className="flex flex-col h-screen min-h-screen overflow-hidden">
      <PlatformNavigation session={session} />
      <main className="flex-1 overflow-scroll pb-24">{children}</main>
    </div>
  );
}
