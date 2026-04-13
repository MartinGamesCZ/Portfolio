import { API } from "@/api/api";
import { Button, ButtonVariant } from "../base/Button";
import { HeroBackground } from "./HeroBackground";
import Image from "next/image";
import Link from "next/link";

export async function Hero() {
  const config = await API.site.hero.getConfig();

  return (
    <div
      className={`w-screen h-screen flex relative max-h-screen overflow-hidden`}
    >
      <HeroBackground
        text={
          config.backgroundPhrases.sort(() => Math.random() - 0.5).join(" ") +
          " "
        }
      />

      <div className="absolute top-0 left-0 w-full h-full flex justify-center flex-col z-20 px-24">
        <h3 className="mb-6 opacity-80 text-lg">{config.topHintText}</h3>

        <p className="text-3xl">{config.topSubHeading}</p>
        <h1 className="text-6xl text-ctp-peach my-1">{config.heading}</h1>
        <h2 className="text-3xl">{config.bottomSubHeading}</h2>

        <p className="mt-6 opacity-80 text-lg">{config.bottomHintText}</p>

        <div className="flex flex-row gap-4 mt-6">
          <Link href="#contact">
            <Button variant={ButtonVariant.Primary} iconBefore="ph:phone">
              {config.firstButton.text}
            </Button>
          </Link>
          <Link href="#about-me">
            <Button variant={ButtonVariant.Outline} iconBefore="ph:arrow-down">
              {config.secondButton.text}
            </Button>
          </Link>
        </div>

        <p className="absolute bottom-8 left-24 opacity-50">
          Also see:{" "}
          <span className="text-ctp-peach">$ {config.sshCommand}</span>
        </p>
      </div>

      <Image
        src="/esb.png"
        alt="output"
        width={2048}
        height={2048}
        className="absolute -bottom-20 right-0 w-300 h-300 object-contain"
      />
    </div>
  );
}
