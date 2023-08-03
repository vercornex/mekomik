import Link from "next/link";
import React from "react";

export default function Pagination({
  size,
  currentPage,
  limit,
  url,
}: {
  size: number;
  currentPage: number;
  limit: number;
  url: string;
}) {
  const pages = Math.ceil(size / limit);
  const page = currentPage === 1 ? currentPage + 2 : currentPage + 1;
  const links: number[] = [];
  const createPager = () => {
    for (let index = 0; index < pages; index++) {
      links.push(index);
    }
  };
  createPager();
  //   console.log(pages);
  return (
    <>
      <div className="pagination grid grid-cols-7 gap-4">
        <Link href={`${url}?page=${1}&limit=${limit}`} className={`btn-pager`}>
          start
        </Link>
        <Link
          href={`${url}?page=${currentPage - 1}&limit=${limit}`}
          className={`btn-pager ${
            currentPage - 1 < 1 && "pointer-events-none"
          }`}
        >
          prev
        </Link>
        {links.map(
          (link, i) =>
            i < page &&
            i >= currentPage - 2 && (
              <Link
                key={i}
                href={`${url}?page=${i + 1}&limit=${limit}`}
                className={`${
                  i + 1 === currentPage ? "bg-pink-500" : "bg-gray-600"
                } text-center text-white px-3 py-2 rounded-md`}
              >
                {i + 1}
              </Link>
            )
        )}
        <Link
          href={`${url}?page=${currentPage + 1}&limit=${limit}`}
          className={`btn-pager ${
            currentPage + 1 > pages && "pointer-events-none"
          }`}
        >
          next
        </Link>
        <Link
          href={`${url}?page=${pages}&limit=${limit}`}
          className={`btn-pager`}
        >
          end
        </Link>
      </div>
    </>
  );
}
