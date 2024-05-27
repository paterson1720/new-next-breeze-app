import appConfig from "@/app/app.config";

export default function getEnabledOAuthProvidersKeys() {
  const { auth } = appConfig;
  const noneOAuthProviders = ["email", "credentials"];
  const allProvidersKeys = Object.keys(auth.providers) as Array<keyof typeof auth.providers>;
  const enabledProvidersKeys = allProvidersKeys.filter((provider) => {
    const isOAuthProvider = !noneOAuthProviders.includes(provider);
    const isEnabled = auth.providers[provider].enabled;
    return isOAuthProvider && isEnabled;
  });
  return enabledProvidersKeys;
}
