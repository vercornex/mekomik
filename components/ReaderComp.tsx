"use client";

import { getImagesChapter, saveHistory } from "@/utils/help";
import { useEffect, useState } from "react";
import CustomImage from "./CustomImage";
import { usePathname } from "next/navigation";

export default function ReaderComp({
  title,
  chapter,
}: {
  title: string;
  chapter: string;
}) {
  const pathname = usePathname();
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    getData();
    saveHistory(title, pathname);
  }, []);

  const getData = async () => {
    const images = await getImagesChapter(title, chapter);
    setImages(images);
  };

  return (
    <div className="reader min-h-screen h-fit flex flex-col items-center w-full">
      {images &&
        images?.map((item: string, i: any) => (
          <CustomImage key={i} img={item} />
        ))}
    </div>
  );
}
