import { Provider } from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";
import appConfig from "@/app/app.config";

export function getProviders(config: typeof appConfig) {
  const providers: Provider[] = [];
  const providersConfig = config.auth.providers;

  if (providersConfig.google.enabled) {
    providers.push(
      GoogleProvider({
        clientId: providersConfig.google.clientId,
        clientSecret: providersConfig.google.clientSecret,
        allowDangerousEmailAccountLinking: true,
      })
    );
  }

  return providers;
}
