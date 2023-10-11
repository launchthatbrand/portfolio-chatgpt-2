/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { format, parseISO } from "date-fns";

export default function PostDate({ dateString }: { dateString: string }) {
  if (!dateString) return null;

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
}
