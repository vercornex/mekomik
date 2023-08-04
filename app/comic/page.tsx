"use client";
import ListKomik from "@/components/ListKomik";
import SearchKomik from "@/components/SearchKomik";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 p-2 sm:p-8">
      <SearchKomik />
      <ListKomik />
    </main>
  );
}
