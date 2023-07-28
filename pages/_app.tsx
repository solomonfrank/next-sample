import "antd/dist/reset.css";
import "@/styles/globals.css";
import "@/styles/index.scss";
import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import type { AppProps as NextAppProps } from "next/app";
import type { NextPage } from "next";

import { appWithTranslation } from "next-i18next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export type AppPropsWithLayout = NextAppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available

  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default appWithTranslation<AppPropsWithLayout>(MyApp);
