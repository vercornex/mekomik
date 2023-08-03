"use client";

import { usePathname, useRouter } from "next/navigation";

export default function GoButton({
  chapter,
  type,
}: {
  chapter: number;
  type: string;
}) {
  // use router push to next chapter
  const router = useRouter();
  const pathName = usePathname();
  const newUrl = pathName.split("-")[0];
  const zero = pathName.split("-")[1].startsWith("0") ? "0" : "";
  const go = `${newUrl}-${zero}${chapter}`;

  const disable = chapter < 1 && type === "prev";
  return (
    <button
      disabled={disable}
      className={`btn-primary`}
      onClick={() => {
        router.push(go);
        console.log("clicked");
      }}
    >
      {type}
    </button>
  );
}
