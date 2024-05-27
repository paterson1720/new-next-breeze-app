"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

/**
 * AOS is a small library that helps you animate elements on your page as you scroll.
 * We use it to animate elements on the landing page.
 * @see https://michalsnik.github.io/aos/
 */

export default function AosInitializer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  return <>{children}</>;
}
