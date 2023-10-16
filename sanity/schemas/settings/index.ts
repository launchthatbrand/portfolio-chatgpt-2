/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as demo from "lib/demo.data";

import { defineArrayMember, defineField, defineType } from "sanity";

import { CogIcon } from "@sanity/icons";
import OpenGraphInput from "./OpenGraphInput";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  preview: { select: { title: "title", subtitle: "description" } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: "name",
      description: "This is your name for the portfolio website",
      title: "Name",
      type: "string",
      initialValue: demo.name,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      initialValue: demo.description,
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      description:
        "Used for social media previews when linking to the index page.",
      type: "object",
      components: {
        input: OpenGraphInput as any,
      },
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          initialValue: demo.ogImageTitle,
        }),
      ],
    }),
  ],
});
