import { getCurrentUser } from "@/actions/users";
import { requireAuth } from "@/actions/auth";
import AccountView from "@/components/views/account";
import PlatformPageContainer from "@/components/platform-page-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack-Kit - Manage account",
  description: "Manage your Full-Stack-Kit account.",
};

export default async function Page() {
  await requireAuth();

  const user = await getCurrentUser();

  return (
    <PlatformPageContainer pageHeaderTitle="Manage account">
      <AccountView user={user} />
    </PlatformPageContainer>
  );
}
