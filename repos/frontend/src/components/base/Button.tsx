import { Icon, IconifyIcon } from "@iconify/react";
import { ReactNode } from "react";

export enum ButtonVariant {
  Primary = "primary",
  Outline = "outline",
}

interface IButtonProps {
  children: ReactNode;
  variant: ButtonVariant;
  iconBefore?: ReactNode | IconifyIcon;
}

export function Button(props: IButtonProps) {
  const variantClass = {
    [ButtonVariant.Primary]:
      "bg-ctp-peach text-ctp-mantle border-2 border-transparent",
    [ButtonVariant.Outline]:
      "bg-transparent text-ctp-peach border-2 border-ctp-peach",
  };

  const child = (
    <>
      {props.iconBefore && typeof props.iconBefore === "string" ? (
        <Icon icon={props.iconBefore} className="w-6 h-6" />
      ) : (
        (props.iconBefore as ReactNode)
      )}
      {props.children}
    </>
  );

  return (
    <button className={`cursor-pointer relative group`}>
      <div
        className={`px-4 py-2 text-lg ${variantClass[props.variant]} group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-300 flex flex-row items-center gap-2`}
      >
        {child}
      </div>
      <div className="px-4 py-2 text-lg bg-transparent text-transparent select-none h-full border-2 border-ctp-peach absolute top-0 left-0 transition-all duration-300 flex flex-row items-center gap-2">
        {child}
      </div>
    </button>
  );
}
