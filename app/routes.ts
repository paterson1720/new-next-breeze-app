import { Role } from "@/lib/types/enums";
import { NavigationRoute } from "@/lib/types/routes";
import appConfig from "./app.config";

export const navigationRoutes: NavigationRoute[] = [
  {
    name: "Dashboard",
    path: appConfig.pages.dashboard,
    protected: true,
    roles: [Role.USER],
  },
  {
    name: "Account",
    path: appConfig.pages.account,
    protected: true,
    roles: [Role.USER],
  },
];
