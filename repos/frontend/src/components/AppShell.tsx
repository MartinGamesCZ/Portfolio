import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface IAppShellProps {
  children: ReactNode | ReactNode[];
}

export function AppShell(props: IAppShellProps) {
  return (
    <div className="w-screen min-h-screen bg-ctp-mantle text-ctp-text">
      <Navbar />
      <main className="w-full h-full flex flex-col">{props.children}</main>
    </div>
  );
}
