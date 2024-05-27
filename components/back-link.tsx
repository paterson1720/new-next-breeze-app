import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  onClick?: () => void;
}

export default function BackLink({ href, onClick, children }: PropsWithChildren<Props>) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="flex items-center space-x-2 mb-6 text-gray-500 hover:text-gray-600"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        <span>{children}</span>
      </button>
    );
  }

  return (
    <Link
      href={href || "#"}
      className="flex items-center space-x-2 mb-6 text-gray-500 hover:text-gray-600"
    >
      <ArrowLeftIcon className="w-4 h-4" />
      <span>{children}</span>
    </Link>
  );
}
