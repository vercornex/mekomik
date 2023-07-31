"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import CustomButton from "./CustomButton";
import { clearHistory } from "@/utils/help";

export default function Navbar() {
  const pathname = usePathname();
  const isHistory = pathname === "/history";
  const router = useRouter();
  const clean = () => {
    clearHistory();
    router.push("/comic");
  };
  return (
    <nav className="flex p-4 pb-0 px-8 items-center gap-4">
      <Link href={"/comic"} className="btn-home">
        {" "}
        Home
      </Link>

      <Link href={"/history"} className="btn-home">
        {" "}
        History
      </Link>
      {isHistory && (
        <CustomButton
          title="Clear History"
          containerStyle="bg-white text-black px-8 py-2 rounded-md"
          handleClick={clean}
        />
      )}
    </nav>
  );
}
