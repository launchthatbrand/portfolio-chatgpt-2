import Image from "next/image";
import ProfileImage from "components/ProfileImage";
import React from "react";

interface ProfileCardProps {
  name?: string;
  loc?: string;
  desc?: string;
  profileImage?: unknown;
  title?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  loc,
  desc,
  profileImage,
  title,
}) => {
  return (
    <>
      <div className="relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg">
        <div className="px-6">
          <div className="flex flex-wrap justify-items-start">
            <div className="flex w-full justify-items-start">
              <div className="relative">
                <Image
                  src="/img/team-2-800x800.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="max-w-150-px h-auto rounded-lg border-none align-middle shadow-xl"
                />
                <ProfileImage
                  /* slug={slug} */
                  title={title ?? "title"}
                  image={profileImage}
                  priority={false}
                />
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-blueGray-700 mb-2 text-xl font-semibold leading-normal">
              {name}
            </h3>
            <div className="text-blueGray-400 mb-2 mt-0 text-sm font-bold uppercase leading-normal">
              <i className="fas fa-map-marker-alt text-blueGray-400 mr-2 text-lg"></i>{" "}
              {loc}
            </div>
          </div>
          <div className="border-blueGray-200 mt-5 py-5">
            <div className="flex flex-wrap justify-center">
              <p className="text-blueGray-700 mb-4 text-lg leading-relaxed">
                {desc}
              </p>
              {/*  <a
                  href="#pablo"
                  className="text-lightBlue-500 font-normal"
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Set default prop values using defaultProps
ProfileCard.defaultProps = {
  name: "Default Name",
  loc: "Default Location",
  desc: "Default Description",
};

export default ProfileCard;
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
