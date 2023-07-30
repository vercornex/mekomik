import { komik } from "@/constants";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 p-8">
      <h1 className="font-bold">Cari Komik</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {komik.length > 0 &&
          komik.map((data, i) => (
            <Link
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
