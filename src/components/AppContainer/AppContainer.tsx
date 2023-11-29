import useStyles from "@/hooks/useStyles";
import React from "react";
import styles from "./AppContainer.module.scss";

// Type declarations for component props
interface IAppContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

// Container for the entire app
export default function AppContainer({ children }: IAppContainerProps) {
  const classes = useStyles(styles);

  return <main className={classes("main", "fullsize")}>{children}</main>;
}
