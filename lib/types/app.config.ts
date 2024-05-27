import { Role } from "./enums";

export interface AppConfig {
  brand: {
    companyName: string;
    appName: string;
    logoUrl: string;
  };

  pages: {
    home: string;
    about: string;
    contact: string;
    signin: string;
    signout: string;
    register: string;
    dashboard: string;
    account: string;
  };

  redirects: {
    afterSignin: string;
    afterSignout: string;
    whenAccessingAnUnauthorizedPage: string;
    whenNotLoggedInAndAccessingProtectedPage: string;
  };

  api: {
    baseUrl: string;
    sendMail: string;
    authProviders: string;
  };

  account: {
    allowDeleteAccount: boolean;
    showConnectedAccountsSection: boolean;
  };

  auth: {
    defaultRoles: Role[];
    providers: {
      google: {
        enabled: boolean;
        clientId: string;
        clientSecret: string;
      };
    };
  };
}
