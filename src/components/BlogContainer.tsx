import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function BlogContainer({ children }: Props) {
  return <div className="container mx-auto px-5">{children}</div>;
}
