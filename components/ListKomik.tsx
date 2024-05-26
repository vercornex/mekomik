"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import { getTitlesLength } from "@/utils";

export default function ListKomik() {
  const searchParam = useSearchParams();
  const url = usePathname();
  const [limit, setLimit] = useState(10);
  const [datas, setDatas] = useState<any>([]);
  const [totalKomik, setTotalKomik] = useState(0);


  const page = searchParam.get("page") ? parseInt(searchParam.get("page")!) : 1;
  useEffect(() => {
    
    const totalKomik = getTitlesLength();
    setTotalKomik(totalKomik)
    async function fetchData() {
      let start = limit * (page - 1);
      let loadedData: any[] = [];

      // Fetch data in chunks until we reach the desired number of records
      while (loadedData.length < limit) {
        const response = await fetch(`/api/data?start=${start}`);
        const chunk = await response.json();
        if (chunk.length === 0) break; // No more data available
        loadedData = loadedData.concat(chunk);
        start += chunk.length;
      }
      setDatas(loadedData);
    }

    fetchData();
  }, [limit, page]);

  return (
    <>
      <div className="flex self-start items-center gap-2">
        <label htmlFor="show" className="text-white">
          Show:
        </label>
        <select
          name="show"
          id="show"
          className="text-black px-8 py-2"
          defaultValue={limit}
          onChange={(e) => setLimit(parseInt(e.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="80">80</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {datas.length > 0 &&
          datas.map((data: any, i: number) => (
            <Link
              key={i}
              className="text-white p-4 bg-gray-900 border-2 border-gray-700 rounded-md cursor-pointer"
              href={`/comic/baca/${data}`}
            >
              {data}
            </Link>
          ))}
      </div>
      <Pagination
        url={url}
        size={totalKomik}
        currentPage={page}
        limit={limit}
      />
    </>
  );
}
