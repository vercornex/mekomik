export const getImagesChapter = async (title: string, chapter: string) => {
  const images: string[] = [];
  for (let index = 1; index <= 26; index++) {
    const url = `https://cdn.manhwaland.cfd/wp-content/manga-images/${title[0]}/${title}/${chapter}/${index}.jpg`;
    images.push(url);
  }
  return images;
};
export const saveHistory = (title: string, pathname: string) => {
  // Step 1: Retrieve the existing array from localStorage
  const DATA = localStorage.getItem("history");
  const convertTitle = title.replaceAll("-", " ");

  // Step 2: Convert the JSON string back to an array (or create an empty array if the data is not yet in localStorage)
  const histories = DATA ? JSON.parse(DATA) : [];

  // Step 3: Check if there's an existing entry with the same title
  const existingHistoryIndex = histories.findIndex(
    (item: any) => item.title === convertTitle
  );
  const currChapter = parseInt(pathname.toString().charAt(pathname.length - 1));

  // Step 4: Push the new object into the array or update the existing URL
  const payload = {
    title: convertTitle,
    url: `${window.location.origin}${pathname}`,
    chapter: currChapter,
  };

  if (existingHistoryIndex !== -1) {
    // If an entry with the same title is found, replace its URL
    histories[existingHistoryIndex].url = payload.url;
    histories[existingHistoryIndex].chapter = payload.chapter;
  } else {
    // If no entry with the same title is found, add a new entry to the array
    histories.push(payload);
  }

  // Step 5: Limit the array length to 10
  const maxLength = 10;
  if (histories.length > maxLength) {
    histories.splice(0, histories.length - maxLength);
  }

  // Step 6: Convert the updated array to a JSON string and save it to localStorage
  const updatedData = JSON.stringify(histories);
  localStorage.setItem("history", updatedData);
};

export const clearHistory = () => {
  localStorage.setItem("history", "");
};

export const getHistory = (): object[] => {
  // Step 1: Retrieve the existing array from localStorage
  const DATA = localStorage.getItem("history");
  // Step 2: Convert the JSON string back to an array (or create an empty array if the data is not yet in localStorage)
  const histories = DATA ? JSON.parse(DATA) : [];
  return histories;
};
