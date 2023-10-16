import { type Post, type Settings } from "lib/sanity.queries";
import { getAllPosts, getClient, getSettings } from "lib/sanity.client";

import { type GetStaticProps } from "next";
import IndexPage from "components/IndexPage";
import PreviewIndexPage from "components/PreviewIndexPage";
import type { SharedPageProps } from "~/app/layout";
import { readToken } from "lib/sanity.api";

interface PageProps extends SharedPageProps {
  posts: Post[];
  settings: Settings;
}

type Query = Record<string, string>;

export default function Page(props: PageProps) {
  const { posts, settings, draftMode } = props;

  if (draftMode) {
    return <PreviewIndexPage posts={posts} settings={settings} />;
  }

  return <IndexPage posts={posts} settings={settings} />;
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
  ]);

  return {
    props: {
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
