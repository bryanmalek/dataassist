export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "DataAssist";

export const APP_DOMAIN = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN || "dataassist.io"}`;

export const APP_HOSTNAMES = new Set([
    process.env.NEXT_PUBLIC_APP_DOMAIN,
    `www.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
]);
