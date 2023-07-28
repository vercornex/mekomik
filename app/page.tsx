"use client";

import { useState } from "react";

export default function Home() {
  const [download, setDownload] = useState("");
  const [input, setInput] = useState("");
  const [itemName, setItemName] = useState("");
  async function fetchData() {
    const response = await fetch("http://localhost:3000/api/data", {
      method: "POST",
      body: JSON.stringify({ input }),
    });
    // console.log(input);
    const { item, downloads } = await response.json();
    setDownload(downloads);
    setItemName(item);
  }
  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold">Search</h1>
      <input
        className="p-2 text-black"
        type="text"
        placeholder="search package"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="flex p-2 rounded-md bg-blue-600 text-white"
        onClick={fetchData}
      >
        go
      </button>
      {download && (
        <p className="text-white">
          {itemName} package has {download} dowloads
        </p>
      )}
    </main>
  );
}
