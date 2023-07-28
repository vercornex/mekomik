import { JSDOM } from "jsdom";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { input } = await req.json();
  const url = `https://www.npmjs.com/package/${input.toLowerCase()}`;
  // console.log(url);

  const response = await fetch(url);

  const html = await response.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const downloads = document.querySelector("._9ba9a726")?.textContent;

  return NextResponse.json({ item: input, downloads });
}
