export interface NavigationRoute {
  name: string;
  path: string;
  protected: boolean;
  roles: string[];
  children?: NavigationRoute[];
}
