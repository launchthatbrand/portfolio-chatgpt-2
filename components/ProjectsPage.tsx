/* import * as demo from "lib/demo.data"; */

import type { Post, Settings } from "lib/sanity.queries";

import Container from "components/BlogContainer";
import IndexPageHead from "components/IndexPageHead";
import Layout from "components/BlogLayout";
import Projects from "components/Projects";

/* import BlogHeader from "components/BlogHeader"; */

/* import IntroTemplate from "intro-template"; */

export interface ProjectsPageProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}

export default function ProjectsPage(props: ProjectsPageProps) {
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
          <Projects posts={posts} />
        </Container>
        {/* <IntroTemplate /> */}
      </Layout>
    </>
  );
}
