/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as demo from "lib/demo.data";

import type { Post, Settings } from "lib/sanity.queries";

import BlogHeader from "components/BlogHeader";
import Container from "components/BlogContainer";
import Layout from "components/BlogLayout";
import MoreStories from "components/MoreStories";
import PostBody from "components/PostBody";
import PostHeader from "components/PostHeader";
import PostPageHead from "components/PostPageHead";
import PostTitle from "components/PostTitle";
import SectionSeparator from "components/SectionSeparator";
import { notFound } from "next/navigation";

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  morePosts: Post[];
  settings: Settings;
}

const NO_POSTS: Post[] = [];

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props;
  const { name = demo.name } = settings || {};

  const slug = post?.slug;

  if (!slug && !preview) {
    notFound();
  }
  console.log(post);

  return (
    <>
      <PostPageHead settings={settings} post={post} />
      {post.excerpt}

      <Layout preview={preview!} loading={loading}>
        <Container>
          <BlogHeader title={name} level={2} />
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}
