/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Avatar from "components/AuthorAvatar";
import Date from "components/PostDate";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "lib/sanity.queries";
import ProjectImage from "components/ProjectImage";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, "_id">) {
  /* return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title!}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date!} />
      </div>
      {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  ); */
  console.log({ coverImage });
  return (
    <div className="container mx-auto overflow-hidden p-7 lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
      <div className="flex flex-wrap items-start">
        <div className="mr-auto px-4 pt-24 md:w-1/4 md:pt-0">
          <ProjectImage
            slug={slug}
            title={title!}
            image={coverImage}
            priority={false}
          />
        </div>
        <div className="ml-auto px-12 md:w-3/4 md:px-4">
          <div className="md:pr-12">
            <h3 className="text-3xl font-semibold">{title}</h3>
            <p className="text-blueGray-500 mt-4 text-lg leading-relaxed">
              {/* {desc} */}
            </p>
          </div>
          {/* <div className="block pb-6">
            {tags && tags.length > 0 ? (
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase last:mr-0"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span>No tags</span>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
