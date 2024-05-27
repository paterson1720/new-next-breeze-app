import { CurrentUser } from "@/actions/users";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  CodeBracketSquareIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  WalletIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Authentication",
    description:
      "Authentication with email & password, Magic Link, OAuth with Facebook, Google, Twitter and GitHub.",
    Icon: () => (
      <div className="text-pink-500 bg-pink-100 md:p-4 rounded-lg">
        <ShieldCheckIcon className="w-6 h-6" />
      </div>
    ),
  },
  {
    name: "Authorization",
    description:
      "Role based authorization. Protect your routes with ease and control which users can access which resources.",
    Icon: () => (
      <div className="text-green-500 bg-green-100 md:p-4 rounded-lg">
        <LockClosedIcon className="w-6 h-6" />
      </div>
    ),
  },
  {
    name: "Admin Panel",
    description: "Admin panel to manage users, roles, permissions, announcement banners, and more.",
    Icon: () => (
      <div className="text-blue-500 bg-blue-100 md:p-4 rounded-lg">
        <Squares2X2Icon className="w-6 h-6" />
      </div>
    ),
  },
  {
    name: "Payment & Subscriptions",
    description:
      "Stripe integration. User can upgrade, cancel, update subscriptions and view invoice from the billing page.",
    Icon: () => (
      <div className="text-yellow-500 bg-yellow-100 md:p-4 rounded-lg">
        <WalletIcon className="w-6 h-6" />
      </div>
    ),
  },
  {
    name: "Emails & Templates",
    description:
      "Send transactional emails with ease. Welcome email, magic links, and more. Customizable HTML email templates.",
    Icon: () => (
      <div className="text-indigo-500 bg-indigo-100 md:p-4 rounded-lg">
        <CodeBracketSquareIcon className="w-6 h-6" />
      </div>
    ),
  },
  {
    name: "Internationalization",
    description:
      "Support English, French and Spanish out of the box. Easily add more if needed. Helping you to reach a wider audience.",
    Icon: () => (
      <div className="text-purple-500 bg-purple-100 md:p-4 rounded-lg">
        <GlobeAltIcon className="w-6 h-6" />
      </div>
    ),
  },
];

interface Props {
  user: CurrentUser | null;
}

export default function DashboardView({ user }: Props) {
  return (
    <div className="w-7xl max-w-full mx-auto">
      <h1 className="text-xl font-bold mb-2">Howdy, {user?.name}</h1>
      <p className="mb-6 text-secondary-foreground">
        This is where you would implement the dashboard of your app. <strong>Full Stack Kit</strong>{" "}
        allows you to focus on the main logic of your app to ship 3x faster. All the following time
        consuming features are already implemented for you:
      </p>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div key={feature.name} className="flex items-start space-x-4">
            <feature.Icon />
            <div>
              <h2 className="font-semibold text-lg mb-1">{feature.name} →</h2>
              <p className="text-secondary-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-4 text-xl">
        You also get a lot of UI components and sections, utility functions, reusable logics and
        design patterns to help you build your app at the speed of light while keeping the quality
        high and the codebase clean. Also a vibrant discord community to help you out when you need
        help.
      </div>
      <Separator className="my-6" />
      <a href="https://docs.full-stack-kit.dev/" target="_blank">
        <Button className="mx-auto" variant="outline">
          Read the documentation →
        </Button>
      </a>
    </div>
  );
}
