/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
// ./nextjs-pages/src/pages/index.tsx

import type { GetStaticProps } from "next";
import Link from "next/link";
import Posts from "@/src/components/Posts/Posts";
import PreviewPosts from "@/src/components/Posts/PreviewPosts";
import type { SanityDocument } from "@sanity/client";
import dynamic from "next/dynamic";
import { getClient } from "@/sanity/lib/getClient";
import { groq } from "next-sanity";

const PreviewProvider = dynamic(
  () => import("@/src/components/Posts/PreviewProvider"),
);

export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
  _id, title, slug
}`;

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = context.draftMode || false;
  const previewToken = preview ? process.env.SANITY_READ_TOKEN : ``;
  if (preview && !previewToken) {
    throw new Error(
      `Preview mode is active, but SANITY_READ_TOKEN is not set in environment variables`,
    );
  }
  const client = getClient(previewToken);

  const data = await client.fetch(postsQuery);

  return { props: { data, preview, previewToken } };
};

export default function Home({
  data,
  preview,
  previewToken,
}: {
  data: SanityDocument[];
  preview: boolean;
  previewToken?: string;
}) {
  if (preview && previewToken) {
    return (
      <PreviewProvider previewToken={previewToken}>
        <PreviewPosts posts={data} />
        <div className="prose prose-blue p-8">
          <Link href="/api/exit-preview">Exit preview</Link>
        </div>
      </PreviewProvider>
    );
  }

  return <Posts posts={data} />;
}
