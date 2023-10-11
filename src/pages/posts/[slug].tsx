/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */

import type { Post, Settings } from "@/sanity/lib/sanity.queries";
import {
  getAllPostsSlugs,
  getClient,
  getPostAndMoreStories,
  getSettings,
} from "@/sanity/lib/sanity.client";

import type { GetStaticProps } from "next";
import PostPage from "@/src/components/Posts/Post";
import PreviewPostPage from "@/src/components/Posts/PreviewPost";
import type { SharedPageProps } from "@/src/pages/_app";
import { readToken } from "@/sanity/lib/sanity.api";

interface PageProps extends SharedPageProps {
  post: Post;
  morePosts: Post[];
  settings?: Settings;
}

interface Query {
  [key: string]: string;
}

export default function ProjectSlugRoute(props: PageProps) {
  const { settings, post, morePosts, draftMode } = props;

  if (draftMode) {
    return (
      <PreviewPostPage post={post} morePosts={morePosts} settings={settings} />
    );
  }

  return <PostPage post={post} morePosts={morePosts} settings={settings} />;
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const [settings, { post, morePosts }] = await Promise.all([
    getSettings(client),
    getPostAndMoreStories(client, params.slug),
  ]);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      morePosts,
      settings,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: "blocking",
  };
};
