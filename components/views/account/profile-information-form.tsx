"use client";

import { useState } from "react";
import { CurrentUser, updateProfile } from "@/actions/users";
import { ActionResponseStatus } from "@/lib/types/enums";
import Flex from "@/components/ui/flex";
import Spinner from "@/components/ui/spinner";
import FlexCol from "@/components/ui/flex-col";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Props {
  user: CurrentUser | null;
}

export default function ProfileInformationForm({ user }: Props) {
  const [userData, setUserData] = useState<Partial<CurrentUser> | null>(user);
  const [message, setMessage] = useState<string | null>(null);
  const [responseStatus, setResponseStatus] = useState<ActionResponseStatus>(
    ActionResponseStatus.IDLE
  );

  const [defaultFirstName, defaultLastName] = userData?.name?.split(" ") || [];

  const handleUpdateProfile = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    setResponseStatus(ActionResponseStatus.PENDING);
    const data = await updateProfile({
      firstName: String(firstName),
      lastName: String(lastName),
    });

    if (data.error) {
      setMessage(data.message);
      return setResponseStatus(data.status);
    }

    setMessage(data.message);
    setResponseStatus(data.status);
    setUserData(data.user);
  };

  return (
    <Flex className="gap-8 md:gap-36 flex-col lg:flex-row">
      <FlexCol className="max-w-xs">
        <h3 className="text-lg text-primary">Profile Information</h3>
        <p className="text-secondary-foreground">Basic info, like your name email and avatar.</p>
      </FlexCol>
      <FlexCol as="form" onSubmit={handleUpdateProfile} className="max-w-xl w-full">
        <Avatar>
          <AvatarImage src={user?.image || undefined} alt="@shadcn" />
          <AvatarFallback>
            {`${defaultFirstName?.[0] || ""}${defaultLastName?.[0] || ""}`}
          </AvatarFallback>
        </Avatar>
        <Flex className="gap-4 flex-col lg:flex-row">
          <Input
            id="first_name"
            name="firstName"
            placeholder="First Name"
            defaultValue={userData?.firstName || defaultFirstName}
            disabled={responseStatus === ActionResponseStatus.PENDING}
            minLength={2}
            pattern="\S+.*"
            required
          />
          <Input
            id="last_name"
            name="lastName"
            placeholder="Last Name"
            defaultValue={userData?.lastName || defaultLastName}
            disabled={responseStatus === ActionResponseStatus.PENDING}
            minLength={2}
            pattern="\S+.*"
            required
          />
        </Flex>
        <Flex className="gap-4 flex-col lg:flex-row">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={userData?.email || ""}
            className="text-secondary-foreground"
            disabled
          />
        </Flex>
        <Button
          className="w-fit px-12"
          type="submit"
          disabled={responseStatus === ActionResponseStatus.PENDING}
        >
          <span>Save</span>
          <Spinner
            className="ml-2"
            size="sm"
            visible={responseStatus === ActionResponseStatus.PENDING}
          />
        </Button>
        <Alert variant="destructive" visible={responseStatus === ActionResponseStatus.FAILED}>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
        <Alert variant="success" visible={responseStatus === ActionResponseStatus.SUCCEEDED}>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      </FlexCol>
    </Flex>
  );
}
