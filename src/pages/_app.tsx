import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";

// Get fonts
const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin-ext"],
});

// App component
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={Jakarta.className}>
      <Component {...pageProps} />
    </div>
  );
}
