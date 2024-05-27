"use client";

import Flex from "@/components/ui/flex";
import FlexCol from "@/components/ui/flex-col";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import Spinner from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import deleteAccount from "@/actions/users/delete-account";
import { CurrentUser } from "@/actions/users";

interface Props {
  user: CurrentUser | null;
  visible?: boolean;
}

export default function DeleteMyAccount({ user, visible = true }: Props) {
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    if (!user) return;
    setIsDeleting(true);
    await deleteAccount(String(user.id))
      .catch(() => {
        toast({
          title: "Error",
          description: "Error deleting your account. Please try again later",
        });
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  if (!visible) return null;

  return (
    <Flex className="gap-8 md:gap-36 flex-col lg:flex-row">
      <FlexCol className="max-w-xs">
        <h3 className="text-lg text-primary">Delete My Account</h3>
        <p className="text-secondary-foreground">
          This action is irreversible. All your data will be deleted.
        </p>
      </FlexCol>
      <FlexCol className="max-w-sm w-full">
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="w-full">
              <Button className="w-full" variant="destructive" visible={!isDeleting}>
                Delete my account
              </Button>
              <Button className="w-full" variant="destructive" visible={isDeleting} disabled>
                <Spinner size="sm" className="mr-2" /> Deleting...
              </Button>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you really sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Clicking &quot;Delete my account&quot; will permanently delete your account and
                remove your data from our servers. This action is irreversible
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteAccount}>Delete my account</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </FlexCol>
    </Flex>
  );
}
