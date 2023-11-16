import cat from "@/cat.json";
import Lottie from "lottie-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Martin Petr</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={font.className}>
        <h1>Coming soon!</h1>
        <p>
          You can follow the progress on{" "}
          <a href="https://github.com/MartinGamesCZ">my github</a>
        </p>
        <Lottie animationData={cat} />
      </main>
    </>
  );
}
