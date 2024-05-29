"use client";
import React, { useEffect, useState } from "react";
import CustomInput from "./CustomInput";
import Link from "next/link";
import { getTitles } from "@/utils";

export default function SearchKomik() {
  const [input, setInput] = useState("");
  const [find, setFind] = useState<any>(null);
  const DATA = getTitles()

  async function fetchData() {
    console.log("fetch")
    const found = DATA.filter((item:string) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    // alert(`submitted ${found}`);
    setFind(found);
  }
  useEffect(() => {
    const timeout = setTimeout(fetchData, 1500)
  
    return () => {
      clearTimeout(timeout)
    }
  }, [input])
  
  return (
    <>
      <h1 className="font-bold">Cari Komik</h1>
      <CustomInput
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Cari...       Esc to cancel"
      />
      {input !== "" &&find &&
        find.map((dta: any, i: number) => (
          <Link
            key={i}
            className="text-white p-4 bg-gray-900 border-2 border-gray-700 rounded-md cursor-pointer"
            href={`/comic/baca/${dta}`}
          >
            {dta}
          </Link>
        ))}
    </>
  );
}
