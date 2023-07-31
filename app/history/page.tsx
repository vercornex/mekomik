"use client";
import { ObjectProps } from "@/types";
import { getHistory } from "@/utils/help";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState<object[]>([]);
  useEffect(() => {
    const histories = getHistory();
    setHistory(histories);
  }, []);

  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="font-bold text-[24px]">Terakhir Baca</h1>
      <div className="history grid sm:grid-cols-4 gap-4">
        {history.map((item: any, i: number) => (
          <Link
            key={i}
            href={`/comic/baca/${item.title}/chapter-${item.chapter}`}
            className="text-white p-4 bg-gray-900 border-2 border-gray-700 rounded-md cursor-pointer h-20 mx-h-24"
          >
            {item.title} chapter-{item.chapter}
          </Link>
        ))}
      </div>
    </div>
  );
}
