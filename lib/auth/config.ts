import { NextAuthConfig } from "next-auth";
import { getProviders } from "@/lib/auth/get-providers";
import appConfig from "@/app/app.config";

const config: NextAuthConfig = {
  providers: getProviders(appConfig),
};

export default config;
