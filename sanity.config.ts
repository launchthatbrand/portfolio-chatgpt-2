/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import {
  DRAFT_MODE_ROUTE,
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from "lib/sanity.api";
import { settingsPlugin, settingsStructure } from "plugins/settings";

import authorType from "schemas/author";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import experienceType from "schemas/experience";
import postType from "schemas/post";
import { previewDocumentNode } from "plugins/previewPane";
import { previewUrl } from "sanity-plugin-iframe-pane/preview-url";
import projectType from "schemas/project";
import settingsType from "schemas/settings";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { visionTool } from "@sanity/vision";
import { schema } from "@/sanity/schema";

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "Next.js Blog with Sanity.io";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title,
  schema,
  plugins: [
    deskTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode(),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add the "Open preview" action
    previewUrl({
      base: DRAFT_MODE_ROUTE,
      urlSecretId: previewSecretId,
      matchTypes: [postType.name, settingsType.name],
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
