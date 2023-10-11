/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import Head from "next/head";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main className="prose prose-lg container mx-auto p-4">
        <h1>{post.title}</h1>
        {post?.mainImage ? (
          <Image
            className="float-left m-0 mr-4 w-1/3 rounded-lg"
            src={builder.image(post.mainImage).width(300).height(300).url()}
            width={300}
            height={300}
            alt={post?.mainImage?.alt}
          />
        ) : null}
        {post?.body ? <PortableText value={post.body} /> : null}
      </main>
    </>
  );
}
