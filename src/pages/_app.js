import Bar from "@/component/bar";
import "@/styles/globals.css";
import { Suspense } from "react";

export default function App({ Component, pageProps }) {
  return <>
    <Suspense fallback={<>준비중...</>}>
      <Component  {...pageProps} />
      <Bar/>
    </Suspense>
  </>
}
