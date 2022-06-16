import type { AppProps } from "next/app";
import { DrawerSiderbar } from "../components/DrawerSiderbar";
import { Header } from "../components/Header";

import AppProvider from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <DrawerSiderbar />
      <Header />
    </AppProvider>
  );
}

export default MyApp;
