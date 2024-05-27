import Image from "next/image";
import Link from "next/link";
import appConfig from "@/app/app.config";

export default function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-2">
              <Link href={appConfig.pages.home} className="flex-shrink-0 h-6 w-6">
                <Image
                  src={appConfig.brand.logoUrl}
                  alt={appConfig.brand.appName}
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <a
                className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                href="/terms-and-conditions"
              >
                Terms
              </a>{" "}
              ·{" "}
              <a
                className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">Resources</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Follow us on X
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Join our Discord
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">Full-Stack-Kit</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="/#hero"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="/#features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="/#pricing"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
