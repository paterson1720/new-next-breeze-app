"use client";

import dynamic from "next/dynamic";
import FlexCol from "@/components/ui/flex-col";
import { Separator } from "@/components/ui/separator";
import ProfileInformationForm from "./profile-information-form";
import appConfig from "@/app/app.config";
import { CurrentUser } from "@/actions/users";

const { showConnectedAccountsSection, allowDeleteAccount } = appConfig.account;

const DeleteMyAccount = dynamic(() => import("./delete-account-section"), {
  ssr: false,
});

interface Props {
  user: CurrentUser | null;
}

export default function AccountView({ user }: Props) {
  return (
    <FlexCol className="py-8">
      <ProfileInformationForm user={user} />
      <Separator className="my-12" visible={showConnectedAccountsSection} />
      <DeleteMyAccount user={user} visible={allowDeleteAccount} />
    </FlexCol>
  );
}
