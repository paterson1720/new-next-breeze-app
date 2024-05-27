import Center from "@/components/ui/center";
import SignOutView from "@/components/views/signout";
import PlatformPageContainer from "@/components/platform-page-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack-Kit - Sign out",
  description: "Sign out of Full-Stack-Kit.",
};

export default async function Page() {
  return (
    <PlatformPageContainer className="h-full">
      <Center className="h-full">
        <SignOutView />
      </Center>
    </PlatformPageContainer>
  );
}
