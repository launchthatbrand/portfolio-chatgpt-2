import { type Experience, type Settings } from "lib/sanity.queries";
import { getAllExperiences, getClient, getSettings } from "lib/sanity.client";

import { type GetStaticProps } from "next";
import ExperiencesPage from "components/ExperiencesPage";
import PreviewIndexPage from "components/PreviewIndexPage";
import type { SharedPageProps } from "~/pages/_app";
import { readToken } from "lib/sanity.api";

interface PageProps extends SharedPageProps {
  posts: Experience[];
  settings: Settings;
}

type Query = Record<string, string>;

export default function Page(props: PageProps) {
  const { posts, settings, draftMode } = props;

  if (draftMode) {
    return <PreviewIndexPage posts={posts} settings={settings} />;
  }

  return <ExperiencesPage posts={posts} settings={settings} />;
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllExperiences(client),
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
