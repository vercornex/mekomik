import { NextRequest, NextResponse } from "next/server";
import { DATA, regexUrl } from "@/constants";
import { getChapters, getTitles } from "@/utils";

export async function GET(req: NextRequest) {
  // split url into url and query ex:http://localhost:3000/api/data?start=0 into [http://localhost:3000/api/data, start=0]
  const query = req.url.split("?")[1];
  // split each query, in case we have more than one query param
  const params = query.split("&");
  // get first param value by splitting with "=" sign
  const title = params[0].split("=")[1].replaceAll(regexUrl, " ");
  console.log(title);

  const Data = getTitles()

  // Slice the data to get the desired chunk
  const index = Data.findIndex(
    (data: any) => data.toLowerCase() === title.toLowerCase()
  );

  const chapters = getChapters(index)

  return NextResponse.json({chapters:chapters, title:title});
}
