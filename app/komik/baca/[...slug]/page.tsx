import { fetchDataSpec } from "@/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const baca = async ({ params, searchParams }: any) => {
  const { query, chapters } = await fetchDataSpec(params.slug);
  // console.log(params.slug);
  const len = params.slug.length;
  const isDataEmtpy =
    !Array.isArray(chapters) || chapters.length < 1 || !chapters;
  return (
    <div
      className={`${
        len < 2
          ? "grid grid-cols-6 gap-4"
          : "flex flex-col sm:w-[50%] justify-center items-center p-4 sm:p-8"
      }`}
    >
      {!isDataEmtpy &&
        params.slug.length > 1 &&
        chapters.map((item: string, i: any) => (
          <Image src={item} alt="img" width={600} height={600} />
        ))}
      {!isDataEmtpy &&
        params.slug.length < 2 &&
        chapters.map((item, i) => (
          <Link
            href={`/komik/baca/${params.slug}/chapter-${i + 1}`}
            key={i}
            className="p-2"
          >
            <p>
              {query} - Chapter {i + 1}
            </p>
          </Link>
        ))}
    </div>
  );
};

export default baca;
