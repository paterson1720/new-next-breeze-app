import { Session } from "next-auth";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import appConfig from "@/app/app.config";

interface Props {
  visible: boolean;
  session: Session | null;
}

export default function LoginButton({ session }: Props) {
  const router = useRouter();

  if (session) return null;

  const goToSignIn = () => {
    router.push(appConfig.pages.signin);
  };

  return (
    <Button className="font-bold py-2 px-4 rounded" onClick={goToSignIn}>
      Sign in
    </Button>
  );
}
