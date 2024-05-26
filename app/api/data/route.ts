import { NextRequest, NextResponse } from "next/server";
import { getTitles } from "@/utils";

export async function GET(req: NextRequest) {
  const numRecords = 10; // Number of records to load in each chunk
  // split url into url and query ex:http://localhost:3000/api/data?start=0 into [http://localhost:3000/api/data, start=0]
  const query = req.url.split("?")[1];
  // split each query, in case we have more than one query param
  const params = query.split("&");
  // get first param value by splitting with "=" sign
  const startParam = params[0].split("=")[1];
  const start = parseInt(startParam) || 0;
  const Data = getTitles()

  // Slice the data to get the desired chunk
  const chunk = Data.slice(start, start + numRecords);
  return NextResponse.json(chunk);
}
