"use client";

import CustomInput from "@/components/CustomInput";
import { komik } from "@/constants";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [input, setInput] = useState("");
  const [find, setFind] = useState<any>(null);
  const searchComic = (e: any) => {
    if (e.key === "Enter" && input !== "") {
      const found = komik.filter((data) =>
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
    console.log(e.key);
  };
  return (
    <main className="flex flex-col justify-center items-center gap-4 p-8">
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {komik.length > 0 &&
          komik.map((data, i) => (
            <Link
              key={i}
              className="text-white p-4 bg-gray-900 border-2 border-gray-700 rounded-md cursor-pointer"
              href={`/comic/baca/${data.title}`}
            >
              {data.title}
            </Link>
          ))}
      </div>
    </main>
  );
}
