import Image from "next/image";
import styles from "./Heading.module.scss";
import Wave from "@/assets/wave1";

export default function Heading() {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
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
