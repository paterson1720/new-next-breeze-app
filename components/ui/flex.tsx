import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export default forwardRef<HTMLDivElement, PropsWithChildren<Props>>(function FlexCol(
  { as, children, className, style },
  ref
) {
  const Component = as || "div";

  return (
    <Component className={clsx(`gap-4 flex`, className)} style={style} ref={ref}>
      {children}
    </Component>
  );
});
