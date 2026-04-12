import { ReactNode } from "react";

export enum ButtonVariant {
  Primary = "primary",
  Outline = "outline",
}

interface IButtonProps {
  children: ReactNode;
  variant: ButtonVariant;
}

export function Button(props: IButtonProps) {
  return (
    <button className={`cursor-pointer relative group`}>
      <div className="px-4 py-2 text-lg bg-ctp-peach text-ctp-mantle group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-300">
        {props.children}
      </div>
      <div className="px-4 py-2 text-lg bg-transparent text-transparent select-none h-full border-2 border-ctp-peach absolute top-0 left-0 transition-all duration-300">
        {props.children}
      </div>
    </button>
  );
}
