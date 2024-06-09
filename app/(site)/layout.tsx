import { getCurrentSession } from "@/actions/auth";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import AosInitializer from "@/components/landing/aos-initializer";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const session = await getCurrentSession();

  return (
    <AosInitializer>
      <Navbar session={session} />
      <main className="grow dark:bg-slate-950 dark:text-gray-100 ">{children}</main>
      <Footer />
    </AosInitializer>
  );
}
