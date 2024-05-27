import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export default forwardRef<HTMLDivElement, PropsWithChildren<Props>>(function Center(
  { as, children, className, style },
  ref
) {
  const Component = as || "div";

  return (
    <Component className={clsx(`grid place-items-center`, className)} style={style} ref={ref}>
      {children}
    </Component>
  );
});
