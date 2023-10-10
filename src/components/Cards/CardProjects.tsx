import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title?: string;
  desc?: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc, tags }) => {
  return (
    <div className="container mx-auto overflow-hidden p-7 lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
      <div className="flex flex-wrap items-start">
        <div className="mr-auto px-4 pt-24 md:w-1/4 md:pt-0">
          <Image
            src="/img/documentation.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="max-w-full rounded-lg shadow-xl"
            style={{
              transform:
                "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
            }}
          />
        </div>
        <div className="ml-auto px-12 md:w-3/4 md:px-4">
          <div className="md:pr-12">
            <h3 className="text-3xl font-semibold">{title}</h3>
            <p className="text-blueGray-500 mt-4 text-lg leading-relaxed">
              {desc}
            </p>
          </div>
          <div className="block pb-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

// Set default prop values using defaultProps
ProjectCard.defaultProps = {
  title: "Default Title",
  desc: "Default Description",
  tags: ["Tag1", "Tag2", "Tag3"],
};

export default ProjectCard;
/* 
export default function CardProfile() {
  return (
    <div className="container mx-auto overflow-hidden pb-20">
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto mt-48 w-full px-12 md:w-4/12 md:px-4">
          <div className="text-blueGray-500 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
            <i className="fas fa-sitemap text-xl"></i>
          </div>
          <h3 className="mb-2 text-3xl font-semibold leading-normal">
            {employment.title}
          </h3>
          <p className="text-blueGray-600 mb-4 mt-4 text-lg font-light leading-relaxed">
            Every element that you need in a product comes built in as a
            component. All components fit perfectly with each other and can have
            different colours.
          </p>
          <div className="block pb-6">
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
              Buttons
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
              Inputs
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
              Labels
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
              Menus
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
              Navbars
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
              Pagination
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
              Progressbars
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
              Typography
            </span>
          </div>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
            target="_blank"
            className="text-blueGray-700 hover:text-blueGray-500 font-bold transition-all duration-150 ease-linear"
          >
            View All{" "}
            <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
 */
