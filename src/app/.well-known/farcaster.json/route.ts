import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload:
        "eyJkb21haW4iOiJzb3BoaWEtY2Vsb25mdC0yLnZlcmNlbC5hcHAifQ",
      signature:
        "MHgzN2I5MGViMTAwN2I5NDFjOGMyNDU2Nzk2Yzc3YzgyMjhlNzgzYjgwYzNmMWI4MDExMjQ4YTIwZjJmOGEzMDI3MWQyZTM3YWIyY2E4OTE2YjQwOThiYTRhZmE0MmQyYzQ0NTY2ZDg3MjRjNmMwMzM4YWM3ZTU3ODA5MmU1YjZhZjFj",
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/og.png`,
      buttonTitle: "Open",
      webhookUrl: `${appUrl}/api/webhook`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#555555",
      primaryCategory: "social",
      tags: ["nft", "celo", "minting", "collectibles", "art"],
    },
  };

  return Response.json(config);
}
