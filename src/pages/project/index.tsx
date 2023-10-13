/* eslint-disable @typescript-eslint/no-unused-vars */
import { type Project, type Settings } from "lib/sanity.queries";
import { getAllProjects, getClient, getSettings } from "lib/sanity.client";

import { type GetStaticProps } from "next";
import ProjectsPage from "components/ProjectsPage";
// import PreviewProjectsPage from "components/PreviewProjectsPage";
import type { SharedPageProps } from "~/pages/_app";
import { readToken } from "lib/sanity.api";

interface PageProps extends SharedPageProps {
  posts: Project[];
  settings: Settings;
}

type Query = Record<string, string>;

export default function Page(props: PageProps) {
  const { posts, settings, draftMode } = props;

  /*  if (draftMode) {
    return <PreviewProjectsPage posts={posts} settings={settings} />;
  } */
  console.log(posts);
  return <ProjectsPage posts={posts} settings={settings} />;
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllProjects(client),
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
