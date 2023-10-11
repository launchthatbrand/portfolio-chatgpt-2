import "@fortawesome/fontawesome-free/css/all.min.css";
import "~/styles/globals.css";
import "~/styles/tailwind.css";

import { type ReactElement, type ReactNode, lazy } from "react";

import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { api } from "~/utils/api";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const PreviewProvider = lazy(
  () => import("@/src/components/Posts/PreviewProvider"),
);

const MyApp = ({
  Component,
  pageProps,
}: AppPropsWithLayout & { pageProps: SharedPageProps }) => {
  // const getLayout = Component.getLayout ?? ((page) => page);
  const { draftMode, token } = pageProps as SharedPageProps;

  /*  return getLayout(<Component {...pageProps} />); */
  return (
    <>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

export default api.withTRPC(MyApp);
