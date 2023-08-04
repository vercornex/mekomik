"use client";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { komik, DATA } from "@/constants";
import Link from "next/link";

export default function SearchKomik() {
  const [input, setInput] = useState("");
  const [find, setFind] = useState<any>(null);
  const searchComic = (e: any) => {
    console.log(e.key);
    if (
      (e.key === "Enter" || e.key === "Go" || e.key === "Done") &&
      input !== ""
    ) {
      const found = DATA.filter((data: { title: string }) =>
        data.title.toLowerCase().includes(input.toLowerCase())
      );
      // alert(`submitted ${found}`);
      setFind(found!);
      setInput("");
    } else if ((e.key === "Enter" || e.key === "Escape") && input === "") {
      setFind(null);
    } else if (e.key === "Escape") {
      setFind(null);
      setInput("");
    }
  };
  return (
    <>
      <h1 className="font-bold">Cari Komik</h1>
      <CustomInput
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Cari...       Esc to cancel"
        handleKeyDown={searchComic}
      />
      {find &&
        find.map((dta: any, i: number) => (
          <Link
            key={i}
            className="text-white p-4 bg-gray-900 border-2 border-gray-700 rounded-md cursor-pointer"
            href={`/comic/baca/${dta.title}`}
          >
            {dta.title}
          </Link>
        ))}
    </>
  );
}
