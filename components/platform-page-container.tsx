import { Fragment } from "react";
import PlatformPageHeader from "./platform-page-header";
import { cn } from "@/lib/utils/tailwind";

interface Props {
  children: React.ReactNode;
  pageHeaderTitle?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export default function PlatformPageContainer({
  children,
  as,
  className,
  style,
  pageHeaderTitle,
}: Props) {
  const Component = as || "div";

  return (
    <Fragment>
      <PlatformPageHeader visible={Boolean(pageHeaderTitle)}>{pageHeaderTitle}</PlatformPageHeader>
      <Component
        className={cn("max-w-7xl mx-auto px-4 py-6 lg:py-12 sm:px-6 lg:px-8", className)}
        style={style}
      >
        {children}
      </Component>
    </Fragment>
  );
}
