/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Post from "./Post";
import type { SanityDocument } from "@sanity/client";
import { postQuery } from "@/src/pages/[slug]";
import { useLiveQuery } from "@sanity/preview-kit";
import { useRouter } from "next/router";

export default function PreviewPosts({ post }: { post: SanityDocument }) {
  const params = useRouter().query;
  const [data] = useLiveQuery(post, postQuery, params);

  return <Post post={data} />;
}
