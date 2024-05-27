import { AppConfig } from "@/lib/types";
import { Role } from "@/lib/types/enums";

const appConfig: AppConfig = {
  brand: {
    companyName: "Full Stack Kit LLC.",
    appName: "Full-Stack-Kit",
    logoUrl: "/images/logo.png",
  },

  pages: {
    home: "/",
    about: "/about",
    contact: "/contact",
    signin: "/signin",
    signout: "/signout",
    register: "/register",
    dashboard: "/dashboard",
    account: "/account",
  },

  redirects: {
    afterSignin: "/dashboard",
    afterSignout: "/signin",
    whenAccessingAnUnauthorizedPage: "/unauthorized",
    whenNotLoggedInAndAccessingProtectedPage: "/signin",
  },

  api: {
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
    sendMail: "/mail/send",
    authProviders: "/auth/providers",
  },

  account: {
    allowDeleteAccount: true,
    showConnectedAccountsSection: true,
  },

  auth: {
    defaultRoles: [Role.USER, Role.ADMIN],
    providers: {
      google: {
        enabled: true,
        clientId: String(process.env.GOOGLE_CLIENT_ID),
        clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
      },
    },
  },
};

export default appConfig;
