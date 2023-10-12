/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import * as demo from "lib/demo.data";

import type { Post, Settings } from "lib/sanity.queries";

import BlogMeta from "components/BlogMeta";
import Head from "next/head";
import { urlForImage } from "lib/sanity.image";

export interface PostPageHeadProps {
  settings: Settings;
  post: Post;
}

export default function PostPageHead({ settings, post }: PostPageHeadProps) {
  const title = settings.title ?? demo.title;
  return (
    <Head>
      <title>{post.title ? `${post.title} | ${title}` : title}</title>
      <BlogMeta />
      {post.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(post.coverImage)
            .width(1200)
            .height(627)
            .fit("crop")
            .url()}
        />
      )}
    </Head>
  );
}
