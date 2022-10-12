import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export type HeadingSize = "sm" | "md" | "lg";

export interface IHeadingProps {
  size?: HeadingSize;
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = "md", children, asChild }: IHeadingProps) {
  const Comp = asChild ? Slot : "h2";
  return (
    <Comp
      className={clsx("text-gray-100 font-bold font-sans", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
