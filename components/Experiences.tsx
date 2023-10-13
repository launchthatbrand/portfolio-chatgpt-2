/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { Experience } from "lib/sanity.queries";
import ExperienceComponent from "components/ExperienceComponent";

export default function Experiences({ posts }: { posts: Experience[] }) {
  return (
    <section>
      {/* <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2> */}
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <ExperienceComponent
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            start_date={post.start_date}
            end_date={post.end_date}
          />
        ))}
      </div>
    </section>
  );
}
