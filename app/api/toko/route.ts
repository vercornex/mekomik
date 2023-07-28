import { JSDOM } from "jsdom";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { input } = await req.json();
  // Validate the input using a regular expression (allowing only alphanumeric characters and spaces)
  const inputRegex = /^[a-zA-Z0-9\s]+$/;
  if (!inputRegex.test(input)) {
    return NextResponse.error();
  }

  // Sanitize and encode the input before using it in the URL
  // const convertedInput = encodeURIComponent(input.replaceAll(" ", "+"));
  const convertedInput = encodeURIComponent(input);
  const url = `https://www.tokopedia.com/search?q=${convertedInput}&source=universe&st=product&navsource=home&srp_component_id=02.02.01.02`;
  // console.log(url);

  const response = await fetch(url);

  const html = await response.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  try {
    // Code for fetching and parsing the HTML
    const products: object[] = [];
    document.querySelectorAll("").forEach(
      (div) =>
        // div.querySelectorAll("div.pcv3__container").forEach((data) =>
        products.push({
          link: div,
        })
      // )
    );
    // document.querySelectorAll(".css-jza1fo").forEach((item) =>
    //   item.querySelectorAll(".css-llwpbs").forEach((data) => {
    //     // const product = {
    //     //   link:
    //     //     data
    //     //       .querySelector(".pcv3__info-content.css-gwkf0u")
    //     //       ?.getAttribute("href") || "",
    //     //   name: (
    //     //     data.querySelector(".prd_link-product-name") || { textContent: "" }
    //     //   ).textContent,
    //     //   price: (
    //     //     data.querySelector(".prd_link-product-price") || { textContent: "" }
    //     //   ).textContent,
    //     //   store: (
    //     //     data.querySelector(".prd_link-shop-name") || { textContent: "" }
    //     //   ).textContent,
    //     //   integrity: (
    //     //     data.querySelector(".prd_label-integrity") || { textContent: "" }
    //     //   ).textContent,
    //     //   rating: (
    //     //     data.querySelector(".prd_rating-average-text") || {
    //     //       textContent: "",
    //     //     }
    //     //   ).textContent,
    //     // };
    //     products.push({
    //       link: data.querySelector(".pcv3__info-content.css-gwkf0u"),
    //     });
    //   })
    // );
    // const products = Array.from(
    //   document.querySelectorAll(".pcv3__info-content.css-gwkf0u")
    // ).map((item) => ({
    //   link: item.getAttribute("href") || "",
    //   name: (
    //     item.querySelector(".prd_link-product-name") || { textContent: "" }
    //   ).textContent,
    //   price: (
    //     item.querySelector(".prd_link-product-price") || { textContent: "" }
    //   ).textContent,
    //   store: (item.querySelector(".prd_link-shop-name") || { textContent: "" })
    //     .textContent,
    //   integrity: (
    //     item.querySelector(".prd_label-integrity") || { textContent: "" }
    //   ).textContent,
    //   rating: (
    //     item.querySelector(".prd_rating-average-text") || { textContent: "" }
    //   ).textContent,
    // }));
    console.log(products);

    return NextResponse.json({ item: input, products });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.error();
  }
}

// const prd_names: string[] = [];
// const prd_prices: string[] = [];
// const stores: string[] = [];
// const sales: string[] = [];
// document
//   .querySelectorAll(".pcv3__info-content.css-gwkf0u")
//   ?.forEach((item) => links.push(item.getAttribute("href")!));
// document
//   .querySelectorAll(".prd_link-product-name")
//   ?.forEach((prd) => prd_names.push(prd.textContent!));
// document
//   .querySelectorAll(".prd_link-product-price")
//   ?.forEach((price) => prd_prices.push(price.textContent!));
// document
//   .querySelectorAll(".prd_link-shop-name")
//   ?.forEach((store) => stores.push(store.textContent!));
// document
//   .querySelectorAll(".prd_label-integrity")
//   ?.forEach((sale) => sales.push(sale.textContent!));
// console.log(stores);
