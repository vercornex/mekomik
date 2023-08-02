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
  const images: string[] = [];
  for (let index = 1; index <= 26; index++) {
    const url = `https://cdn.manhwaland.cfd/wp-content/manga-images/${title[0]}/${title}/${chapter}/${index}.jpg`;
    images.push(url);
  }
  return images;
};
export const getImagesChapterOld = async (title: string, chapter: string) => {
  // const chImages = [];
  // for (let i = 1; i <= chapters.length; i++) {
  const images: string[] = [];
  let urlChanged = false;
  for (let index = 1; index <= 200; index++) {
    urlChanged = false;
    const url = `https://cdn.manhwaland.cfd/wp-content/manga-images/${title[0]}/${title}/${chapter}/${index}.jpg`;

    let imageNotFound = await checkImageNotFound(url);
    if (imageNotFound && urlChanged) {
      return images;
    }
    if (imageNotFound) {
      urlChanged = true;
      const newUrl = `https://cdn.manhwaland.cfd/uploads/manga-images/${title[0]}/${title}/${chapter}/${index}.jpg`;
      imageNotFound = await checkImageNotFound(newUrl);
      if (!imageNotFound) {
        images.push(newUrl);
      }
    } else {
      images.push(url);
    }
  }
  // }
};

const checkImageNotFound = async (url: RequestInfo | URL) => {
  const document = await getDOM(url);
  if (document.querySelector("h1")?.textContent === "404") {
    return true;
  }
  return false;
};
export const getTitle = async (url: RequestInfo | URL) => {
  const document = await getDOM(url);
  const title = document.querySelector(".entry-title")?.textContent;
  console.log("Get title: ", title);

  return title;
};

export const getChapterLink = async (url: RequestInfo | URL) => {
  const document = await getDOM(url);
  const chapters: string[] = [];
  console.log("get chapter");
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
  console.log("Saving data...");
  const dictstring = JSON.stringify(dict);

  try {
    writeFileSync(path, dictstring);
    console.log("Data saved successfully!");
  } catch (err) {
    console.error("Error writing to file:", err);
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
  page: number = 21,
  amount: number = 26,
  downloads: object[] = []
) => {
  console.log("Crawling Data...");

  let nextPage = "";
  for (let index = page; index <= amount; index++) {
    if (index > 1) {
      nextPage = `page/${index}/`;
    }
    const url = `https://manhwaland.cfd/${nextPage}`;

    const document = await getDOM(url);

    store(downloads, document);

    // console.log(downloads);
  }
  console.log("RAW: ", downloads);
  console.log("RAW Size: ", downloads.length);
  const cleanData = removeDuplicateData(downloads);
  console.log("Cleaned Data: ", cleanData);
  console.log("Cleaned Data Size: ", cleanData.length);

  const promises = cleanData.map(async (data) => {
    data["title"] = await getTitle(data["link"]);
    data["chapters"] = await getChapterLink(data["link"]);
    // console.log("Crawling page: ", data["title"]);
    // const images: { chapter: string[] | undefined }[] = [];
    // const promises = data["chapters"].map(async (ch: any, i: number) => {
    //   const regexPunctuationExceptCommaAndHyphen = /[^\p{L}\p{N}\s,-]/gu;
    //   const title = `${data["title"]},chapter-${i + 1}`;
    //   const converted = title
    //     .toString()
    //     .toLowerCase()
    //     .replace(regexPunctuationExceptCommaAndHyphen, "")
    //     .replaceAll(" ", "-");
    //   const splited = converted.split(",");
    //   const chapter = await getImagesChapter(splited[0], splited[1]);
    //   images.unshift({
    //     chapter: chapter,
    //   });
    // });
    // await Promise.all(promises);

    // data["images"] = images;
  });
  await Promise.all(promises);

  saveToJson(cleanData, "public/komik.json");

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
