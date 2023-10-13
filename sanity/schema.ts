import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import experience from "./schemas/experience";
import project from "./schemas/project";
import settingsType from "./schemas/settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    experience,
    project,
    blockContent,
    settingsType,
  ],
};
