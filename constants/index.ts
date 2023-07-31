import komik from "../public/dataKomik.json";

const regexPunctuationExceptCommaAndHyphen = /[^\p{L}\p{N}\s,-]/gu;
const regexUrl = /%\d{2}/g;

export { komik, regexPunctuationExceptCommaAndHyphen, regexUrl };
