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
      initialValue: demo.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      description:
        "This is a scentence or two describing yourself and it goes under your name on the homepage",
      title: "Description",
      type: "array",
      initialValue: demo.description,
      of: [
        defineArrayMember({
          type: "block",
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: "object",
                name: "link",
                fields: [
                  {
                    type: "string",
                    name: "href",
                    title: "URL",
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
      validation: (rule) => rule.max(155).required(),
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