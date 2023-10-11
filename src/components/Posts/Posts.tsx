/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Head from "next/head";
import Link from "next/link";
import type { SanityDocument } from "@sanity/client";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
        <h1 className="p-4 text-2xl font-bold">{title}</h1>
        {posts.map((post) => (
          <Link
            key={post._id}
            href={post.slug.current}
            className="p-4 hover:bg-blue-50"
          >
            <h2>{post.title}</h2>
          </Link>
        ))}
      </main>
    </>
  );
}
