export const metadata = {
  title: "Home - Full Stack Kit",
  description:
    "Full Stack Kit is a collection of prebuilt Full-Stack Web Development features and components with Next.js, to help you build your next project faster.",
};

import PressLogos from "@/components/landing/press-logos";
import CallToAction from "@/components/landing/call-to-action";
import ColorfulHero from "@/components/landing/colorful-hero";

export default async function Home() {
  return (
    <>
      <ColorfulHero />
      <PressLogos />
      <CallToAction />
    </>
  );
}
