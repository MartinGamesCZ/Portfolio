import { useEffect } from "react";
import { Scrollbar } from "smooth-scrollbar/scrollbar";

export default function useSmoothScroll() {
  useEffect(() => {
    const options = {
      damping: 0.05,
    };

    const bar = new Scrollbar(document.body, options);

    bar.addListener(({ offset }) => {
      if (typeof window === "undefined") return;

      (
        document.querySelectorAll("[data-fixed]") as unknown as HTMLDivElement[]
      ).forEach((fixed: HTMLDivElement) => {
        fixed.style.left = offset.x + "px";

        if (fixed.dataset.model == "heading") {
          fixed.style.top =
            offset.y + Math.min(0, window.innerHeight / 2 - offset.y) + "px";
        } else if (fixed.dataset.model == "wave") {
          fixed.style.bottom = -(offset.y + offset.y / 2) - 200 + "px";
        } else {
          fixed.style.top = offset.y + "px";
        }
      });
    });

    const onload = () => {
      bar.update();
    };

    window.addEventListener("load", onload);

    return () => {
      if (bar) {
        bar.destroy();

        window.removeEventListener("load", onload);
      }
    };
  }, []);
}
