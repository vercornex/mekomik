"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CustomImage({ img }: any) {
  const [image, setImage] = useState(img);
  const [errMessage, setErrMessage] = useState(false);
  const handleImageNotFound = () => {
    const image404 = img.toString().replace("wp-content", "uploads");
    setImage(image404);
  };
  return (
    <Image
      src={image}
      alt="img"
      width={600}
      height={600}
      onError={handleImageNotFound}
    />
  );
}
