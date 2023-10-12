import * as demo from "lib/demo.data";

import type { Post, Settings } from "lib/sanity.queries";

import BlogHeader from "components/BlogHeader";
import Container from "components/BlogContainer";
import IndexPageHead from "components/IndexPageHead";
import IntroTemplate from "intro-template";
import Layout from "components/BlogLayout";
import MoreStories from "components/MoreStories";

export interface IndexPageProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props;
  /*   const { title = demo.title, description = demo.description } = settings || {}; */

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview!} loading={loading}>
        <Container>
          {/*  <BlogHeader title={title} description={description} level={1} /> */}
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          <MoreStories posts={posts} />
        </Container>
        {/* <IntroTemplate /> */}
      </Layout>
    </>
  );
}
