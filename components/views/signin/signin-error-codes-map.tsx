export const errorCodesMap = {
  OAuthAccountNotLinked:
    "This email is already in use. Please sign in with the provider you used to create your account.",
  EmailCreateAccount: "Could not create email provider user in the database.",
  OAuthCreateAccount: "Could not create OAuth provider user in the database.",
  OAuthCallback: "Error in handling the response from an OAuth provider.",
  OAuthSignin: "Error in constructing an authorization URL.",
  EmailSignin: "Sending the e-mail with the verification token failed.",
  CredentialsSignin: "The authorize callback returned null in the Credentials provider.",
  SessionRequired: "The content of this page requires you to be signed in at all times.",
  Default: "An unknown error occurred. Please try again.",
};
