const axios = require("axios");
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i));
import data from "@/public/FINAL.json"
import { Komik } from "@/types";
const path = require('path');


export const getImagesChapterNeo = async (title: string, chapter: string) => {
  const images = [];
  let index = 1;
  let urlChanged = false;
  let maxRetries = 3;
  let attemp = 0;
  let extension = "jpg";

  while (true) {
    urlChanged = false;
    const url = `https://cdn.manhwaland.cfd/wp-content/manga-images/${title[0]}/${title}/${chapter}/${index}.${extension}`;

    try {
      const imageNotFound = await checkImageNotFound(url);
      // console.log(`${title} ${chapter}/${index}`);

      if (imageNotFound) {
        urlChanged = true;
        const newUrl = `https://cdn.manhwaland.cfd/uploads/manga-images/${title[0]}/${title}/${chapter}/${index}.${extension}`;
        // await delay(5000);
        const imageNotFoundNew = await checkImageNotFound(newUrl);
        // console.log("Change Url");
        if (!imageNotFoundNew) {
          images.push(newUrl);
        } else {
          // Break the loop if the image is not found with the new URL
          attemp++;
          if (attemp < maxRetries) {
            // console.log(
            //   `Image for ${title} ${chapter}/${index} Percobaan: ${attemp} gagal`
            // );
            await delay(5000);
            continue;
          } else if (attemp === maxRetries) {
            extension = "webp";
            continue;
          }
          // console.log(
          //   `Image for ${title} ${chapter}/${index} Percobaan: ${attemp} gagal`
          // );
          extension = "jpg";
          attemp = 0;
          // console.log(`Image for ${title} ${chapter}/${index} Not Found`);
          break;
        }
      } else {
        images.push(url);
      }
      await delay(5000);
    } catch (error) {
      // console.error("Error checking image:", error);
      // Handle the error here or throw it further if needed
      break;
    }

    index++;
  }

  // console.log(`${title} ${chapter} DONE...`);
  return images;
};

const checkImageNotFound = async (url: string, timeout = 5000) => {
  try {
    const response = await axios.head(url, { timeout });
    return response.status !== 200;
  } catch (error) {
    // If there's an error (e.g., network issue or server error), consider the image not found
    return true;
  }
};

export const getTitles = () => {
  const komiks = data as Komik
  const titles = komiks.data.listKomik.titles
  return titles
}

export const getChapters = (index:number) => {
  const komiks = data as Komik
  const chapters = komiks.data.chapters[index]
  return chapters
}

export const getChapter = (index:number) => {
  const komiks = data as Komik
  const chapters = komiks.data.chapters[index]
  return chapters
}

export const getImages = async (title:string, chapter:string) => {
  const response = await fetch(`/api/chapter?title=${title}&chapter=${chapter}`)
  console.log(response)
  const komik = await response.json();
  return komik
}

export const getTitlesLength = () => {
  const komiks = data as Komik
  const titles = komiks.data.listKomik.titles
  return titles.length
}