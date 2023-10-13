/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Avatar from "components/AuthorAvatar";
import Date from "components/PostDate";
import type { Experience } from "lib/sanity.queries";
import Image from "next/image";
import Link from "next/link";
import ProjectImage from "components/ProjectImage";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  start_date,
  end_date,
}: Omit<Experience, "_id">) {
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
  console.log({ title });

  return (
    <div className="container mx-auto overflow-hidden p-7 lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
      <div className="flex flex-wrap items-start">
        <div className="basis-1/4">
          {start_date} - {end_date}
        </div>
        <div className="ml-auto mr-auto basis-3/4">
          {/*           <div className="text-blueGray-500 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
            <i className="fas fa-sitemap text-xl"></i>
          </div> */}
          <h3 className="mb-2 text-3xl font-semibold leading-normal">
            {title}
          </h3>
          <h3 className="mb-2 text-3xl font-semibold leading-normal">
            {/* {position} */}
          </h3>
          <h3 className="mb-2 text-3xl font-semibold leading-normal">
            {title}
          </h3>
          <p className="text-blueGray-600 mb-4 mt-4 text-lg font-light leading-relaxed">
            {excerpt}
          </p>
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
          {/* <a
            href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
            target="_blank"
            className="text-blueGray-700 hover:text-blueGray-500 font-bold transition-all duration-150 ease-linear"
          >
            View All{" "}
            <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
          </a> */}
        </div>
      </div>
    </div>
  );
}
