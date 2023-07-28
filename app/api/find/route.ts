import { getData } from "@/utils";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // const downloads: object[] = [];

  const data = await getData();
  console.log("Crawling DONE...");
  // const promises = data.map(async (item) => {
  //   console.log(item["chapters"].length);
  //   item["chapters"].forEach(async (chapter: string, i: number) => {
  //     item["cdn"] = await getImagesChapter(item["title"], i);
  //   });
  // });

  // await Promise.all(promises);

  // saveToJson(data, "public/allKomik.json");

  return NextResponse.json({ data });
}
