import { navigationRoutes } from "@/app/routes";
import { NavigationRoute } from "@/lib/types";

export function findRouteObjectByPathname(pathname: string): NavigationRoute | undefined {
  const routeObject = navigationRoutes.find((route) => {
    const { children, path } = route;
    if (children) {
      const matchingChild = children.find((child) => child.path === pathname);
      return Boolean(matchingChild);
    }
    return path === pathname;
  });

  return routeObject;
}

export function isCurrentPathProtected(pathname: string) {
  const routeObject = findRouteObjectByPathname(pathname);
  const routeIsProtected = routeObject?.protected;
  return Boolean(routeIsProtected);
}
