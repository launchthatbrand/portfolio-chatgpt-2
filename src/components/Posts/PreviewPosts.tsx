/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Posts from "./Posts";
import type { SanityDocument } from "@sanity/client";
import { postsQuery } from "@/src/pages/posts";
import { useLiveQuery } from "@sanity/preview-kit";

export default function PreviewPosts({
  posts = [],
}: {
  posts: SanityDocument[];
}) {
  const [data] = useLiveQuery(posts, postsQuery);

  return <Posts posts={data} />;
}
