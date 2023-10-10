import { type AppType } from "next/app";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { api } from "~/utils/api";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "~/styles/globals.css";
import "~/styles/tailwind.css";

export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default api.withTRPC(MyApp);