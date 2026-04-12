import { API } from "@/api/api";
import { Button, ButtonVariant } from "../base/Button";
import { HeroBackground } from "./HeroBackground";

export async function Hero() {
  const config = await API.site.hero.getConfig();

  return (
    <div className={`w-screen h-screen flex relative`}>
      <HeroBackground />

      <div className="absolute top-0 left-0 w-full h-full flex justify-center flex-col z-20 px-24">
        <h3 className="mb-6 opacity-80 text-lg">{config.topHintText}</h3>

        <p className="text-3xl">{config.topSubHeading}</p>
        <h1 className="text-6xl text-ctp-peach my-1">{config.heading}</h1>
        <h2 className="text-3xl">{config.bottomSubHeading}</h2>

        <p className="mt-6 opacity-80 text-lg">{config.bottomHintText}</p>

        <div className="flex flex-row gap-4 mt-6">
          <Button variant={ButtonVariant.Primary}>
            {config.firstButton.text}
          </Button>
          <Button variant={ButtonVariant.Outline}>
            {config.secondButton.text}
          </Button>
        </div>

        <p className="absolute bottom-8 left-24 opacity-50">
          Also see:{" "}
          <span className="text-ctp-peach">$ {config.sshCommand}</span>
        </p>
      </div>
    </div>
  );
}
