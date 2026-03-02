export const siteConfig = {
  name: process.env.NEXT_PUBLIC_CLIENT_NAME || "Demo Hotel",
  logoUrl: process.env.NEXT_PUBLIC_CLIENT_LOGO_URL || "",
  primaryColor: process.env.NEXT_PUBLIC_CLIENT_PRIMARY_COLOR || "#1E40AF",
  secondaryColor: process.env.NEXT_PUBLIC_CLIENT_SECONDARY_COLOR || "#10B981",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "localhost:3000",
  supportEmail: process.env.SUPPORT_EMAIL || "support@persept.ai",
};
