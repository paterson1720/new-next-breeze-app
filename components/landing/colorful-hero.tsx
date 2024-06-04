/* eslint-disable react/no-unescaped-entities */
"use client";

import { DiscordLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function ColorfulHero() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="w-full mx-auto px-4 md:px-6 flex flex-col items-center space-y-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-6xl font-bold tracking-tighter flex flex-col">
            <span>Welcome to Your</span>
            <span className="bg-gradient-to-r font-bold lg:text-8xl from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Nextjs-Breeze App
            </span>
          </h1>
          <p className="text-gray-500 md:text-xl mt-12 dark:text-gray-400 max-w-3xl mx-auto">
            Effortlessly build and ship amazing web apps with Next.js. We&apos;ve already laid the
            foundation for you to get started building your next big thing.
          </p>
        </div>
        <div className="flex flex-col text-center">
          <h2 className="text-2xl bg-gradient-to-r font-bold from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Try Out The CRUD Scaffolding CLI
          </h2>
          <p className="text-sm text-orange-500 p-3 border border-muted rounded-md mt-2">
            npx next-breeze g-crud -r posts -m "title:string content:text isPublished:boolean"
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-emerald-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
            href="https://github.com/paterson1720/new-next-breeze-app?tab=readme-ov-file#quick-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Documentation
          </a>
        </div>

        <div>
          <ul className="flex gap-4 items-center text-gray-500 mt-4 dark:text-gray-400 mx-auto">
            <a href="https://discord.gg/W7774VAbSM" target="_blank" rel="noopener noreferrer">
              <li className="flex flex-col items-center border border-muted rounded-md p-4 hover:bg-blue-100/20">
                <DiscordLogoIcon />
                <span className="text-sm">Join our Discord</span>
              </li>
            </a>
            <a href="https://twitter.com/Paterson1720" target="_blank">
              <li className="flex flex-col items-center border border-muted rounded-md p-4 hover:bg-blue-100/20">
                <TwitterLogoIcon />
                <span className="text-sm">Follow The Creator</span>
              </li>
            </a>
            <a
              href="https://github.com/paterson1720/new-next-breeze-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="flex flex-col items-center border border-muted rounded-md p-4 hover:bg-blue-100/20">
                <GitHubLogoIcon />
                <span className="text-sm">Star our Github</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
}
