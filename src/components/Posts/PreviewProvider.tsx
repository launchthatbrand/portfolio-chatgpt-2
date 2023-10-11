// ./nextjs-pages/src/components/PreviewProvider.tsx

import { LiveQueryProvider } from "@sanity/preview-kit";
import { getClient } from "@/sanity/lib/getClient";
import { useMemo } from "react";

export default function PreviewProvider({
  children,
  previewToken,
}: {
  children: React.ReactNode;
  previewToken: string;
}) {
  const client = useMemo(() => getClient(previewToken), [previewToken]);
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
