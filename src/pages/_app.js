import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/soccer-redux";
import { Router } from "next/router";
import { useState } from "react";
import LoadingPage from "@/components/LoadingComponent";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  return (
    <Provider store={store}>
      {loading && <LoadingPage />}
      {!loading && <Component {...pageProps} />}
    </Provider>
  );
}
