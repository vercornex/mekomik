import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { publicPath, regexUrl } from "@/constants";
import { getChapters, getTitles } from "@/utils";
import data from "@/public/FINAL.json"
import { Komik } from "@/types";

const fs = require("fs");

function readUrlsFromFile(filePath: any) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    return [];
  }
}

export async function GET(req: NextRequest) {
  const numRecords = 10; // Number of records to load in each chunk
  // split url into url and query ex:http://localhost:3000/api/data?start=0 into [http://localhost:3000/api/data, start=0]
  const query = req.url.split("?")[1];
  // split each query, in case we have more than one query param
  const params = query.split("&");
  // get first param value by splitting with "=" sign
  const title = params[0].split("=")[1].replace(regexUrl, " ");
  const ch = params[1].split("=")[1].replace(regexUrl, " ");

  const alphabet = title[0];
  const filePath = `https://mekomik.vercel.app/results/${alphabet}/${title}.json`;
  // const filePath = `/results/${alphabet}/${title}.json`;

  console.log(filePath);

  const Data = getTitles();

  // Slice the data to get the desired chunk
  const index = Data.findIndex(
    (data: any) => data.toLowerCase() === title.toLowerCase()
  );
  const chapters = getChapters(index);
  
  const indexChapter = chapters.findIndex(
    (data: any) => data.chapter.toLowerCase() === ch.toLowerCase()
  );
  const Komiks = data as Komik
  console.log(index)
  console.log(title)
  console.log(Data[index])
  console.log(Komiks.data.listKomik.titles[index])
  console.log(ch)
  console.log(indexChapter)

  
  
  // const Komik = readUrlsFromFile(filePath);
  const response = await fetch(filePath)
  const Komik = await response.json()
  console.log(Komiks.data.chapters[index][indexChapter])
  console.log(chapters[indexChapter])
  console.log(Komik[indexChapter].url)

  return NextResponse.json(Komik[indexChapter].data);
}
