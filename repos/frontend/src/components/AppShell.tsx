import { ReactNode } from "react";

interface IAppShellProps {
  children: ReactNode | ReactNode[];
}

export function AppShell(props: IAppShellProps) {
  return (
    <div className="w-screen min-h-screen bg-ctp-mantle text-ctp-text">
      <main>{props.children}</main>
    </div>
  );
}
