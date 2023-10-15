/* eslint-disable @typescript-eslint/no-unsafe-return */
/* import "@fortawesome/fontawesome-free/css/all.min.css";
import "~/styles/globals.css";
import "~/styles/tailwind.css"; */

import "tailwindcss/tailwind.css";

import type { ReactElement, ReactNode } from "react";

import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { lazy } from "react";

/* import type { AppProps } from "next/app"; */

/* import { api } from "~/utils/api"; */

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps &
  SharedPageProps & {
    Component: NextPageWithLayout;
  };

/* const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default api.withTRPC(MyApp); */

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

const PreviewProvider = lazy(() => import("components/PreviewProvider"));

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { draftMode, token } = pageProps as SharedPageProps;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      {draftMode ? (
        <PreviewProvider token={token}>
          getLayout(
          <Component {...pageProps} />)
        </PreviewProvider>
      ) : (
        getLayout(<Component {...pageProps} />)
      )}
    </>
  );
}
