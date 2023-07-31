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
  const goChapter = (chapter: number) => {
    chapter = type === "next" ? chapter + 1 : chapter - 1;
    const go = pathName.replace(
      pathName.charAt(pathName.length - 1),
      chapter.toString()
    );
    router.push(go);
  };
  const disable = type === "prev" && chapter - 1 < 1;
  return (
    <button
      disabled={disable}
      className={`btn-primary`}
      onClick={() => goChapter(chapter)}
    >
      {type}
    </button>
  );
}
