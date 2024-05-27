import clsx from "clsx";
import React, { ElementType, forwardRef, ReactNode } from "react";

type Props<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & React.ComponentProps<T>;

const FlexRow = forwardRef<HTMLElement, Props<ElementType>>(function FlexCol(
  { as: Component = "div", children, className, style, ...props },
  ref
) {
  return (
    <Component
      className={clsx(`gap-4 flex flex-row items-center`, className)}
      style={style}
      ref={ref}
    >
      {children}
    </Component>
  );
});

export default FlexRow;
