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
    name: "Email",
    description:
      "Email is already setup for you. Just add your Email provider credentials SMTP or API keys, and you are good to go.",
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

export default function FullStackKitFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <div key={feature.name} className="flex items-start space-x-4">
          <feature.Icon />
          <div>
            <h2 className="font-semibold text-2xl mb-1">{feature.name} →</h2>
            <p className="text-gray-200">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
