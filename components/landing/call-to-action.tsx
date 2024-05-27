"use client";

export default function CallToAction() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="relative bg-gradient-to-tr from-blue-600 to-purple-500 rounded-lg py-10 px-8 md:py-16 md:px-12 overflow-hidden"
          data-aos="zoom-out"
        >
          <div className="flex flex-col justify-between">
            <div className="mb-6 lg:mb-0 text-left">
              <h3 className="text-4xl font-bold font-uncut-sans mb-2">Want to Ship 10X Faster</h3>
              <p className="text-indigo-100">
                Check out our Premium Next.js Full-Stack Kit. We&apos;ve spent 2 months carefully
                crafting the best Next.js Starter Kit for you to build your next project in days.
              </p>
            </div>
            <div className="flex w-full flex-col md:flex-row gap-4 mt-3">
              <a
                className="block px-6 p-3 w-fit rounded-full text-white bg-gradient-to-t from-purple-600 to-purple-400 hover:to-purple-500 group shadow-lg"
                href="https://full-stack-kit.dev"
              >
                Check it out
                <span className="tracking-normal text-indigo-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
