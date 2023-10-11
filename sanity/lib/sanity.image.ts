/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { dataset, projectId } from "@/sanity/lib/sanity.api";

import createImageUrlBuilder from "@sanity/image-url";

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: any) =>
  imageBuilder.image(source).auto("format").fit("max");
