import { komik, regexUrl } from "@/constants";
import Link from "next/link";

export default async function Baca({ params }: any) {
  const find = params.title.toString().replaceAll(regexUrl, " ");
  const data = komik.find(
    (data) => data.title.toLowerCase() === find.toLowerCase()
  );
  const chapters = data?.chapters;
  const title = data?.title!;
  const getChapterText = (ch: string) => {
    const chapter = ch.split("-");
    const episode = chapter[chapter.length - 1].replace("/", "");
    return episode;
  };
  return (
    <div className="sm:p-8">
      <h1 className="px-4 text-[24px] text-center capitalize">{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 p-4">
        {chapters &&
          chapters.map((ch, i) => (
            <Link
              key={i}
              href={`/comic/baca/${title}/chapter-${getChapterText(ch)}`}
              className="text-white p-4 bg-gray-900 border-2 border-gray-700 rounded-md cursor-pointer"
            >
              chapter-{getChapterText(ch)}
            </Link>
          ))}
      </div>
    </div>
  );
}
