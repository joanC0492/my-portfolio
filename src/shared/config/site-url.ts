const SITE_URL_ENV = "SITE_URL";
const DEFAULT_DEV_SITE_URL = "http://localhost:3000";

const normalizeSiteUrl = (value: string): string => value.replace(/\/+$/, "");

export const getSiteUrlOrThrow = (): string => {
  const rawValue = process.env[SITE_URL_ENV]?.trim();
  const isProduction = process.env.NODE_ENV === "production";

  if (!rawValue) {
    if (!isProduction) {
      // In local development we keep the app running with a deterministic URL.
      console.warn(
        `[site-url] ${SITE_URL_ENV} is not set. Using ${DEFAULT_DEV_SITE_URL} for development metadata only.`
      );
      return DEFAULT_DEV_SITE_URL;
    }

    throw new Error(
      `Missing ${SITE_URL_ENV}. Set ${SITE_URL_ENV} in the deployment environment (e.g. https://joancochachi.dev).`
    );
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(rawValue);
  } catch {
    throw new Error(
      `Invalid ${SITE_URL_ENV} value: "${rawValue}". Use a valid absolute URL such as https://joancochachi.dev.`
    );
  }

  if (!["https:", "http:"].includes(parsedUrl.protocol)) {
    throw new Error(
      `Invalid ${SITE_URL_ENV} protocol: "${parsedUrl.protocol}". Use http or https.`
    );
  }

  return normalizeSiteUrl(parsedUrl.toString());
};

export const getSiteUrlObjectOrThrow = (): URL =>
  new URL(`${getSiteUrlOrThrow()}/`);
