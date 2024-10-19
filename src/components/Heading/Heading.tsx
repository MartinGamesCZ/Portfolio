"use client";

import Image from "next/image";
import styles from "./Heading.module.scss";
import Wave from "@/assets/wave1";
import { useEffect, useRef, useState } from "react";

export default function Heading() {
  const waveRef = useRef<SVGSVGElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const imgDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scroll = window.scrollY;

      if (waveRef.current) {
        waveRef.current.style.bottom = -(scroll / 2) - 100 + "px";
      }

      if (divRef.current) {
        divRef.current.style.zoom = (
          scroll / (window.innerHeight * 2) +
          1
        ).toString();
      }

      if (imgDivRef.current) {
        imgDivRef.current.style.marginLeft = `calc(15% - ${scroll / 4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [waveRef, divRef, imgDivRef]);

  return (
    <div className={styles.root}>
      <div className={styles.image} ref={imgDivRef}>
        <Image
          src="/images/portfolio_model_bw_2.png"
          alt="Model"
          width={1080}
          height={1440}
        />
      </div>
      <div className={styles.text} ref={divRef}>
        <h1 className={styles.title}>
          Martin <br /> Petr
        </h1>
        <h2 className={styles.subtitle}>Software Engineer</h2>
      </div>
      <Wave cref={waveRef} />
    </div>
  );
}
