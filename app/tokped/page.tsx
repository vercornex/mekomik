"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  async function fetchData() {
    const response = await fetch("http://localhost:3000/api/toko", {
      method: "POST",
      body: JSON.stringify({ input }),
    });
    const { products } = await response.json();
    console.log(products);
    setItems(products);
  }
  return (
    <main className="flex flex-col justify-center items-center gap-4 p-4">
      <h1 className="font-bold">Cari Barang dengan penjualan terbanyak</h1>
      <input
        className="p-2 text-black min-w-[400px]"
        type="text"
        placeholder="cari barang"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="flex p-2 rounded-md bg-blue-600 text-white"
        onClick={fetchData}
      >
        go
      </button>
      <div className="flex flex-col">
        {/* {items.length > 0 &&
          items.map((item) => (
            <Link
              target="_blank"
              href={item["link"]}
              className="text-start p-4 rounded-sm hover:bg-[#313131]"
            >
              <p className="text-white">Nama: {item["name"]}</p>
              <p className="text-white">Harga: {item["price"]}</p>
              <p className="text-white">Toko: {item["store"]}</p>
              <div className="info flex gap-4">
                <p className="text-white">{item["integrity"]}</p>
                <p className="text-white">{item["rating"]}</p>
              </div>
            </Link>
          ))} */}
      </div>
    </main>
  );
}
