"use client";
import { regexUrl } from "@/constants";
import { Chapter } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Baca({ params }: any) {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [title, setTitle] = useState("");
  const getChapterText = (ch: string) => {
    const chapter = ch.split("-");
    const episode = chapter[chapter.length - 1].replace("/", "");
    return episode;
  };

  useEffect(() => {
    const find = params.title.toString().replaceAll(regexUrl, " ");
    async function fetchData() {
      const response = await fetch(`/api/komik?title=${find}`);
      const chunk = await response.json();
      setChapters(chunk.chapters);
      setTitle(chunk.title);
    }
    fetchData();
  }, []);

  return (
    <div className="sm:p-8">
      <h1 className="px-4 text-[24px] text-center capitalize">{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 p-4">
        {chapters &&
          chapters.map((ch, i) => (
            <Link
              key={i}
              href={`/comic/baca/${title}/${ch.chapter}`}
              className="text-white p-4 bg-gray-900 border-2 border-gray-700 rounded-md cursor-pointer"
            >
              {ch.chapter}
            </Link>
          ))}
      </div>
    </div>
  );
}
