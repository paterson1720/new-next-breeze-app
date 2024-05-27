import "@/styles/globals.css";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import SignOutReloader from "@/components/signout-reloader";
import { getCurrentSession } from "@/actions/auth";
import { Toaster } from "@/components/ui/toaster";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const uncutsans = localFont({
  src: [
    {
      path: "../public/fonts/Uncut-Sans-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Uncut-Sans-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/Uncut-Sans-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/Uncut-Sans-BoldOblique.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-uncut-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://full-stack-store.vercel.app"),
  title: "Full-Stack-Kit - Full Stack Next.js Template",
  description:
    "Ship your next full stack app with ease. Full-Stack-Kit includes all necessary but time-consuming features to help you get started and focus on the main logic of your app.",
  icons: [{ url: "/favicon.ico" }],
  twitter: {
    card: "summary_large_image",
    site: "@full_stack_kit",
    creator: "@full_stack_kit",
  },
  openGraph: {
    title: "Full-Stack-Kit - Full Stack Next.js Template",
    description:
      "Ship your next full stack app with ease. Full-Stack-Kit includes all necessary but time-consuming features to help you get started and focus on the main logic of your app.",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getCurrentSession();

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${uncutsans.className} font-inter antialiased tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignOutReloader session={session}>{children}</SignOutReloader>
            <Toaster />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
