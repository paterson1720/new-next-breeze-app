import appConfig from "@/app/app.config";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export const menuOptions = [
  {
    name: "Profile",
    path: appConfig.pages.account,
    Icon: UserCircleIcon,
  },
];
