/* eslint-disable @typescript-eslint/require-await */

import "styles/index.css";

import { Footer } from "components/global/Footer";
import IntroTemplate from "intro-template";
import { Navbar } from "components/global/Navbar";
import { PreviewBanner } from "components/preview/PreviewBanner";
import { Sidebar } from "~/components/Sidebar/Sidebar";
import { Suspense } from "react";
import { draftMode } from "next/headers";
import dynamic from "next/dynamic";
import { token } from "lib/sanity.fetch";

const PreviewProvider = dynamic(
  () => import("components/preview/PreviewProvider"),
);

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDraftMode = draftMode().isEnabled;

  const layout = (
    <div className="bg-blueGray-100 flex h-screen w-screen flex-row">
      <div className=" lg:w-1/2">
        {isDraftMode && <PreviewBanner />}
        <Suspense>
          <Sidebar />
        </Suspense>
      </div>
      <div className="m-4 lg:w-1/2">
        <Suspense>{children}</Suspense>
      </div>
      <Suspense>{/* <Footer /> */}</Suspense>
      {/* <IntroTemplate /> */}
    </div>
  );

  if (isDraftMode) {
    return <PreviewProvider token={token!}>{layout}</PreviewProvider>;
  }

  return layout;
}
