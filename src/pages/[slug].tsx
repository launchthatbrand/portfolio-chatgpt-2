/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */ /* */

import type { GetStaticPaths, GetStaticProps } from "next";

import Link from "next/link";
import Post from "@/src/components/Posts/Post";
import PreviewPost from "@/src/components/Posts/PreviewPost";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../sanity/lib/client";
import dynamic from "next/dynamic";
import { getClient } from "../../sanity/lib/getClient";
import { groq } from "next-sanity";

const PreviewProvider = dynamic(
  () => import("@/src/components/Posts/PreviewProvider"),
);
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
  title, mainImage, body
}`;

// Prepare Next.js to know which routes already exist
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`,
  );

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = context.draftMode || false;
  const previewToken = preview ? process.env.SANITY_READ_TOKEN : ``;
  const client = getClient(previewToken);

  const data = await client.fetch(postQuery, context.params);

  return { props: { data, preview, previewToken } };
};

export default function Page({
  data,
  preview,
  previewToken,
}: {
  data: SanityDocument;
  preview: boolean;
  previewToken?: string;
}) {
  if (preview && previewToken) {
    return (
      <PreviewProvider previewToken={previewToken}>
        <PreviewPost post={data} />
        <div className="prose prose-lg prose-blue clear-both mx-auto px-4 py-16">
          <Link href="/api/exit-preview">Exit preview</Link>
        </div>
      </PreviewProvider>
    );
  }

  return <Post post={data} />;
}
