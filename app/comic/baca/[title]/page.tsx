import { komik } from "@/constants";
import { getImagesChapter } from "@/utils";
import Link from "next/link";

export default async function Baca({ params }: any) {
  const find = params.title.toString().replaceAll("%20", " ");
  const data = komik.find((data) => data.title === find);
  const chapters = data?.chapters;
  const title = data?.title!;
  return (
    <div className="p-8">
      <h1 className="px-4 text-[24px]">{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 p-4">
        {chapters &&
          chapters.map((ch, i) => (
            <Link
              key={i}
              href={`/comic/baca/${title}/chapter-${i + 1}`}
              className="text-white p-4 bg-gray-900 border-2 border-gray-700 rounded-md cursor-pointer"
            >
              chapter-{i + 1}
            </Link>
          ))}
      </div>
    </div>
  );
}
