"use client";
import { getImages } from "@/utils";
// import { saveHistory } from "@/utils/help";
// import { useEffect, useState } from "react";
// import { getImagesChapterNeo } from "@/utils";
import CustomImage from "./CustomImage";
// import { usePathname } from "next/navigation";
// import { DATA } from "@/constants";
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
  // console.log(title)
  useEffect(() => {
    async function fetchData() {
      const chunk = await getImages(title, chapter)
      setImages(chunk);
    }
    try {
      setLoading(true);
      fetchData();
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
      {!images && <h1>Page is not available</h1>}
      {!loading &&
        images &&
        images.map((item: string, i: any) => (
          <CustomImage key={i} img={item} />
        ))}
    </div>
  );
}
