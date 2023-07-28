import { getChapterLink, getImagesChapter } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(
  request: any,
  context: { params: any },
  response: NextApiResponse
) {
  const { query } = context.params;
  const regexPunctuationExceptCommaAndHyphen = /[^\p{L}\p{N}\s,-]/gu;

  const converted = query
    .toString()
    .toLowerCase()
    .replace(regexPunctuationExceptCommaAndHyphen, "")
    .replaceAll(" ", "-");

  const link = `https://manhwaland.cfd/manga/${converted}`;

  const chapter = converted.includes("chapter");
  const splited = converted.split(",");
  // console.log("params", converted);
  // console.log("split: ", splited[0], splited[1]);
  const chapters = chapter
    ? await getImagesChapter(splited[0], splited[1])
    : await getChapterLink(link);

  return NextResponse.json({
    chapters,
    query,
  });
}
