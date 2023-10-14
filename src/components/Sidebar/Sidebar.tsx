import { getClient, getSettings } from "lib/sanity.client";

import { GetServerSideProps } from 'next';
import Link from "next/link";
import PreviewIndexPage from "components/PreviewIndexPage";
import ProfileCard from "../Cards/CardProfile";
import React from "react";
import { Settings } from "lib/sanity.queries";
import type { SharedPageProps } from "@/src/pages/_app";
import { readToken } from "lib/sanity.api";
import { useRouter } from "next/router";

interface PageProps extends SharedPageProps {
  settings: Settings;
}

type Query = Record<string, string>;

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

const Sidebar = (props: PageProps) => {
  const { settings, draftMode } = props;
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();

  if (draftMode) {
    /* return <PreviewIndexPage settings={settings} />; */
  }
  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-16 py-4 md:fixed md:bottom-0 md:left-0 md:top-0 md:block md:w-6/12 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
          {/* Toggler */}
          <button
            className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          {/* <Link legacyBehavior href="/">
            <a
              href="#pablo"
              className="text-blueGray-600 mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase md:block md:pb-2"
            >
              Desmond Tatilian
            </a>
          </Link> */}
          <ProfileCard
            name="Desmond Tatilian"
            loc="Tallahassee, Florida"
            desc="I build accessible, inclusive products and digital experiences for the web."
          />

          {/* User */}
          <ul className="flex list-none flex-wrap items-center md:hidden">
            <li className="relative inline-block">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="relative inline-block">{/* <UserDropdown /> */}</li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "absolute left-0 right-0 top-0 z-40 h-auto flex-1 items-center overflow-y-auto overflow-x-hidden rounded px-6 shadow md:relative md:mt-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:shadow-none " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="border-blueGray-200 mb-4 block border-b border-solid pb-4 md:hidden md:min-w-full">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link legacyBehavior href="/">
                    <a
                      href="#pablo"
                      className="text-blueGray-600 mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase md:block md:pb-2"
                    >
                      Notus NextJS
                    </a>
                  </Link>
                </div>
                <div className="flex w-6/12 justify-end">
                  <button
                    type="button"
                    className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mb-4 mt-6 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 h-12 w-full rounded border-0 border-solid bg-white px-3 py-2 text-base font-normal leading-snug shadow-none outline-none focus:outline-none"
                />
              </div>
            </form>

            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="text-blueGray-500 block pb-4 pt-1 text-xs font-bold uppercase no-underline md:min-w-full">
              Admin Layout Pages
            </h6> */}
            {/* Navigation */}

            <ul className="flex list-none flex-col md:min-w-full md:flex-col">
              <li className="items-center">
                <Link legacyBehavior href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    About
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link legacyBehavior href="/admin/settings">
                  <a
                    href="#pablo"
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Experience
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link legacyBehavior href="/admin/tables">
                  <a
                    href="#pablo"
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/admin/tables") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Projects
                  </a>
                </Link>
              </li>
            </ul>

            <ul className="flex list-none flex-col md:min-w-full md:flex-col">
              <li className="items-center">
                <Link legacyBehavior href="/posts">
                  <a
                    href="#pablo"
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/posts") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/posts") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Posts
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link legacyBehavior href="/projects">
                  <a
                    href="#pablo"
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/projects") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/projects") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Projects
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch your profile image data here
  const profileImage = 'path/to/profile-image.jpg';
  console.log(profileImage)

  return {
    props: {
      profileImage,
    },
  };
}

export default Sidebar;
