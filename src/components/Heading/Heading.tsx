"use client";

import Image from "next/image";
import styles from "./Heading.module.scss";
import Wave from "@/assets/wave1";
import { useEffect, useRef, useState } from "react";
import bezier from "bezier-easing";

export default function Heading() {
  const waveRef = useRef<SVGSVGElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const imgDivRef = useRef<HTMLDivElement>(null);

  const [snapped, setSnapped] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const bez = bezier(0.1, 1, 0.2, 1);
    const map = (
      value: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ) => ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > window.innerHeight - 80 && !snapped) {
        setSnapped(true);
      }

      if (scroll < window.innerHeight - 80 && snapped) {
        setSnapped(false);
      }

      /*if (waveRef.current) {
        waveRef.current.style.bottom = -(scroll / 2) - 100 + "px";
      }*/

      /*if (divRef.current) {
        divRef.current.setAttribute(
          "data-fx",
          Math.min(0, window.innerHeight / 2 - scroll) + "px"
        );
      }*/

      /*if (divRef.current) {
        divRef.current.style.zoom = (
          scroll / (window.innerHeight * 2) +
          1
        ).toString();
      }

      if (imgDivRef.current) {
        imgDivRef.current.style.marginLeft = `calc(15% - ${scroll / 4}px)`;
      }*/
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [waveRef, divRef, imgDivRef, snapped]);

  return (
    <div className={styles.root} ref={divRef} data-fixed data-model="heading">
      <div className={styles.image} ref={imgDivRef}>
        <Image
          src="/images/portfolio_model_bw_2.png"
          alt="Model"
          width={1080}
          height={1440}
        />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Martin <br /> Petr
        </h1>
        <h2 className={styles.subtitle}>Software Engineer</h2>
      </div>
      <Wave />
    </div>
  );
}
