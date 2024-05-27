import { Role } from "@/lib/types/enums";
import { Session } from "next-auth";

/**
 * This function is used to check if the current user has the required roles.
 * @param user
 * @param roles
 * @returns {boolean}
 */
export function userHasRoles(user: Session["user"], roles: Role[]) {
  const userRoles = user?.roles || [];
  const userRolesName = userRoles.map((role) => role.role.name);
  return roles.every((role) => userRolesName.includes(role));
}
