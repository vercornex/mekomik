"use client";
import GoButton from "@/components/GoButton";
import ReaderComp from "@/components/ReaderComp";
import { regexPunctuationExceptCommaAndHyphen, regexUrl } from "@/constants";
import { saveHistory } from "@/utils/help";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function chapter({ params }: any) {
  const { title, ch } = params;
  const cprams = useParams();
  const [data, setData] = useState<string[]>([]);

  const comicTitle = title.toString().replace(regexUrl, " ");
  const converted = comicTitle
    .toString()
    .toLowerCase()
    .replace(regexPunctuationExceptCommaAndHyphen, "")
    .replaceAll(" ", "-");
  const currChapter = parseInt(ch.toString().split("-")[1]);
  // console.log(`Current: ${cprams.title} ${cprams.ch}`);
  const pathname = usePathname();

  useEffect(() => {
    saveHistory(comicTitle, pathname);
  }, []);

  return (
    <div className="flex flex-col justify-center px-1 py-8 sm:p-8 gap-8">
      <h1 className="capitalize text-white text-[24px] text-center">
        {comicTitle} {ch}
      </h1>
      <Link
        href={`/comic/baca/${title}`}
        className="text-center hover:text-pink-500 cursor-pointer"
      >
        {comicTitle} All Chapter
      </Link>
      <ReaderComp title={comicTitle} chapter={ch} />
      {/* <ReaderComp title={converted} chapter={ch} data={data} setter={setData} /> */}
      <div className="btn-wrapper flex gap-4 justify-center p-8">
        <GoButton chapter={currChapter - 1} type={"prev"} />
        <GoButton chapter={currChapter + 1} type={"next"} />
      </div>
    </div>
  );
}
