import { PathOrFileDescriptor } from "fs";
import { JSDOM } from "jsdom";
import { writeFileSync } from "node:fs";

export async function fetchData() {
  const response = await fetch("http://localhost:3000/api/find");
  const { data } = await response.json();

  return data;
}
export async function fetchDataSpec(url: any) {
  const response = await fetch(`http://localhost:3000/api/find/${url}`);
  const { query, chapters } = await response.json();
  // console.log(chapters);

  return { query, chapters };
}

export const getImagesChapter = async (title: string, chapter: string) => {
  // const chImages = [];
  // for (let i = 1; i <= chapters.length; i++) {
  const images: string[] = [];
  for (let index = 1; index <= 26; index++) {
    const url = `https://cdn.manhwaland.cfd/wp-content/manga-images/${title[0]}/${title}/${chapter}/${index}.jpg`;
    // console.log("get images from: ", url);
    // https://cdn.manhwaland.cfd/wp-content/manga-images/s/she-wants-to-get-drunk/chapter-1/1.jpg

    const document = await getDOM(url);
    if (document.querySelector("h1")?.textContent === "404") {
      return images;
    }

    images.push(url);
    // console.log("image saved", images);
  }
  // }
};

export const getTitle = async (url: RequestInfo | URL) => {
  const document = await getDOM(url);
  return document.querySelector(".entry-title")?.textContent;
};

export const getChapterLink = async (url: RequestInfo | URL) => {
  const document = await getDOM(url);
  const chapters: string[] = [];
  // console.log("get chapter");
  document.querySelectorAll(".eph-num").forEach(async (div) => {
    const link = div.querySelector("a")?.getAttribute("href")!;
    if (link.startsWith("https")) {
      chapters.unshift(link);
    }
  });
  return chapters;
};

const removeDuplicateData = (arr: any) => {
  // console.log("Cleaning data...");
  const stringSet = new Set();
  const uniqueArray = [];

  for (const obj of arr) {
    const stringifiedObj = JSON.stringify(obj);
    if (!stringSet.has(stringifiedObj)) {
      uniqueArray.push(obj);
      stringSet.add(stringifiedObj);
    }
  }

  return uniqueArray;
};
export const saveToJson = (dict: object[], path: PathOrFileDescriptor) => {
  // console.log("Saving data...");
  const dictstring = JSON.stringify(dict);

  try {
    writeFileSync(path, dictstring);
    // console.log("Data saved successfully!");
  } catch (err) {
    // console.error("Error writing to file:", err);
  }
};
export const getDOM = async (url: RequestInfo | URL) => {
  const response = await fetch(url);

  const html = await response.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;
  return document;
};
export const getData = async (
  page: number = 1,
  amount: number = 61,
  downloads: object[] = []
) => {
  // console.log("Crawling Data...");

  let nextPage = "";
  // for (let index = 1; index <= amount; index++) {
  if (page > 0) {
    nextPage = `page/${page}/`;
  }
  const url = `https://manhwaland.cfd/${nextPage}`;

  const document = await getDOM(url);

  store(downloads, document);

  // console.log(downloads);
  // }
  const cleanData = removeDuplicateData(downloads);
  const promises = cleanData.map(async (data) => {
    data["title"] = await getTitle(data["link"]);
    data["chapters"] = await getChapterLink(data["link"]);
  });
  await Promise.all(promises);

  return cleanData;
};

export const store = (downloads: object[], document: Document) => {
  document.querySelectorAll(".series").forEach(async (data) => {
    const download = {
      link: data.getAttribute("href") || "",
    };

    downloads.push(download);
  });
};
