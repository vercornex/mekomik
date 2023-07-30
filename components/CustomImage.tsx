"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CustomImage({ img }: any) {
  const [image, setImage] = useState(img);
  return (
    <Image
      src={image}
      alt="img"
      width={image === "" ? 0 : 600}
      height={image === "" ? 0 : 600}
      onError={() => setImage("")}
    />
  );
}
