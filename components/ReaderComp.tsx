"use client";

import { getImagesChapter, saveHistory } from "@/utils/help";
import { useEffect, useState } from "react";
import CustomImage from "./CustomImage";
import { usePathname } from "next/navigation";
import { DATA } from "@/constants";

export default function ReaderComp({
  title,
  chapter,
}: {
  title: string;
  chapter: any;
}) {
  const pathname = usePathname();
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    getData();
    saveHistory(title, pathname);
  }, []);

  const getData = async () => {
    const data = DATA.find(
      (data) => data.title.toLowerCase() === title.toLowerCase()
    );
    console.log(data);
    setImages(data?.[chapter]);
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
