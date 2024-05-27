import { cn } from "@/lib/utils";
import React, { ElementType, forwardRef, ReactNode } from "react";

type Props<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  visible?: boolean;
} & React.ComponentProps<T>;

const FlexCol = forwardRef<HTMLElement, Props<ElementType>>(function FlexCol(
  { as: Component = "div", visible = true, children, className, style, ...props },
  ref
) {
  if (!visible) return null;
  return (
    <Component className={cn(`flex flex-col gap-4`, className)} style={style} ref={ref} {...props}>
      {children}
    </Component>
  );
});

export default FlexCol;
