import GoButton from "@/components/GoButton";
import ReaderComp from "@/components/ReaderComp";
import { regexPunctuationExceptCommaAndHyphen, regexUrl } from "@/constants";
import Link from "next/link";

export default async function chapter({ params }: any) {
  const { title, ch } = params;

  const comicTitle = title.toString().replace(regexUrl, " ");
  const converted = comicTitle
    .toString()
    .toLowerCase()
    .replace(regexPunctuationExceptCommaAndHyphen, "")
    .replaceAll(" ", "-");
  const currChapter = parseInt(ch.toString().split("-")[1]);
  // console.log(converted);

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
      <ReaderComp title={converted} chapter={ch} />
      <div className="btn-wrapper flex gap-4 justify-center p-8">
        <GoButton chapter={currChapter} type={"prev"} />
        <GoButton chapter={currChapter} type={"next"} />
      </div>
    </div>
  );
}
