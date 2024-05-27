import { ComponentProps } from "react";
import { signinWithFacebook } from "@/actions/auth";
import { Button } from "@/components/ui/button";

interface Props extends  ComponentProps<typeof Button>{
  visible?: boolean;
  buttonText?: string;
  redirectUrl?: string;
}

export default function SignInWithFacebook({ visible = true, buttonText, redirectUrl }: Props) {
  if (!visible) return null;

  return (
    <form action={() => signinWithFacebook({ redirectUrl })} className="w-full">
      <Button className="w-full text-white bg-blue-900 hover:bg-[#192998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
        <FacebookLogo />
        <span className="w-full text-center">{buttonText || "Sign in with Facebook"}</span>
      </Button>
    </form>
  );
}

export function DisconnectFacebookAccount({
  visible = true,
  onClick,
  buttonText,
}: Props & { onClick?: () => void }) {
  if (!visible) return null;

  return (
    <Button
      className="w-full text-white bg-blue-900 hover:bg-[#192998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55"
      onClick={onClick}
    >
      <FacebookLogo />
      <span className="w-full text-center">{buttonText || "Disconnect Facebook Account"}</span>
    </Button>
  );
}

export function FacebookLogo() {
  return (
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 8 19"
    >
      <path
        fillRule="evenodd"
        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
