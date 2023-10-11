/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @next/next/no-html-link-for-pages */

import Container from "components/BlogContainer";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export default function Alert({
  preview,
  loading,
}: {
  preview?: boolean;
  loading?: boolean;
}) {
  const shouldShow = useSyncExternalStore(
    subscribe,
    () => window.top === window,
    () => false,
  );

  if (!shouldShow || !preview) return null;

  return (
    <div
      className={`${
        loading ? "animate-pulse" : ""
      } border-accent-7 bg-accent-7 border-b text-white`}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {"Previewing drafts. "}
          <a
            href="/api/disable-draft"
            className="hover:text-cyan underline transition-colors duration-200"
          >
            Back to published
          </a>
        </div>
      </Container>
    </div>
  );
}
