import styles from "./PageRoot.module.scss";

interface IPageRootProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function PageRoot({ children }: IPageRootProps) {
  return <main className={styles.root}>{children}</main>;
}
