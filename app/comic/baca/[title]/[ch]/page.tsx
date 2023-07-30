import CustomImage from "@/components/CustomImage";
import { getImagesChapter } from "@/utils";
import React, { useState } from "react";

export default async function chapter({ params }: any) {
  const { title, ch } = params;
  const regexPunctuationExceptCommaAndHyphen = /[^\p{L}\p{N}\s,-]/gu;
  const converted = title
    .toString()
    .toLowerCase()
    .replaceAll("%20", " ")
    .replace(regexPunctuationExceptCommaAndHyphen, "")
    .replaceAll(" ", "-");
  const images = await getImagesChapter(converted, ch);
  //   console.log(images);
  return (
    <div>
      {images &&
        images?.map((item: string, i: any) => (
          <CustomImage key={i} img={item} />
        ))}
    </div>
  );
}
