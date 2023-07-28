"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [datas, setDatas] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const pageNumClick = (page: any) => {
    setPage(page);
    router.replace(`/komik?page=${page}`);
  };

  async function fetchData() {
    setLoading(true);
    // setPage(parseInt(searchParams.get("page")!));
    setDatas({});
    try {
      console.log(page);
      const response = await fetch(
        "http://localhost:3000/api/find?" +
          new URLSearchParams({ page: page.toString() }).toString()
      );
      const { data } = await response.json();

      setDatas(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  const isDataEmtpy = !Array.isArray(datas) || datas.length < 1 || !datas;
  useEffect(() => {
    fetchData();
    return () => {};
  }, [page]);

  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold">Search</h1>

      <div className="wrapper w-full flex flex-col">
        {loading && <div className="mt-16 w-full text-center">Loading</div>}
        {!isDataEmtpy &&
          datas.map((item: any, i: number) => (
            <Link
              href={`/komik/baca/${item["title"]}`}
              key={i}
              className="text-white text-start p-2 hover:bg-gray-400"
            >
              {item["title"]}
            </Link>
          ))}
      </div>
      <div className="flex gap-4">
        {page > 1 && (
          <button
            className="cursor-pointer bg-white mb-8 text-black px-6 py-2 rounded-md"
            onClick={() => pageNumClick(page - 1)}
          >
            Prev
          </button>
        )}
        <button
          className="cursor-pointer bg-white mb-8 text-black px-6 py-2 rounded-md"
          onClick={() => pageNumClick(page + 1)}
        >
          Next
        </button>
      </div>
    </main>
  );
}
