import { fetchData } from "@/utils";
import Link from "next/link";

export default async function Home() {
  const datas = await fetchData();
  const isDataEmtpy = !Array.isArray(datas) || datas.length < 1 || !datas;
  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold">Search</h1>

      <div className="wrapper w-full flex flex-col">
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
    </main>
  );
}
