// ./nextjs-pages/sanity/lib/getClient.ts

import { apiVersion, dataset, projectId, useCdn } from "../env";

import type { SanityClient } from "@sanity/client";
import { createClient } from "@sanity/client";

export function getClient(previewToken?: string): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  });

  return previewToken
    ? client.withConfig({
        token: previewToken,
        useCdn: false,
        ignoreBrowserTokenWarning: true,
        perspective: "previewDrafts",
      })
    : client;
}
