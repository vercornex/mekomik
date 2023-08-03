"use client";
// import { saveHistory } from "@/utils/help";
// import { useEffect, useState } from "react";
// import { getImagesChapterNeo } from "@/utils";
import CustomImage from "./CustomImage";
// import { usePathname } from "next/navigation";
import { DATA } from "@/constants";
import { useEffect, useState } from "react";

export default function ReaderComp({
  title,
  chapter,
}: // data,
// setter,
{
  title: string;
  chapter: any;
  // data: string[];
  // setter: Dispatch<SetStateAction<string[]>>;
}) {
  // const images = await getImagesChapterNeo(title, chapter);
  // setter(images);
  // const pathname = usePathname();
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      const datas = DATA.find(
        (data) => data.title.toLowerCase() === title.toLowerCase()
      );
      // console.log(data);
      setImages(datas?.[chapter]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // const getData = async () => {
  //   const data = await getImagesChapterNeo(title, chapter)
  // setImages(data?.[chapter]);
  // };

  return (
    <div className="reader min-h-screen h-fit flex flex-col items-center w-full">
      {!loading &&
        images.map((item: string, i: any) => (
          <CustomImage key={i} img={item} />
        ))}
    </div>
  );
}
