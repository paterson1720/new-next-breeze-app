import { Metadata } from "next";
import { requireAuth } from "@/actions/auth";
import { getCurrentUser } from "@/actions/users";
import PlatformPageContainer from "@/components/platform-page-container";
import DashboardView from "@/components/views/dashboard";

export const metadata: Metadata = {
  title: "Full-Stack-Kit - Dashboard!",
  description: "Your Full-Stack-Kit dashboard.",
};

export default async function Page() {
  await requireAuth();
  const user = await getCurrentUser();

  return (
    <PlatformPageContainer pageHeaderTitle="Dashboard">
      <DashboardView user={user} />
    </PlatformPageContainer>
  );
}
