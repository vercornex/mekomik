"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CustomImage({ img }: any) {
  const [image, setImage] = useState(img);
  const [imageAlreadyChanged, setImageAlreadyChanged] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  const handleImageNotFound = () => {
    if (imageAlreadyChanged) {
      setHideImage(true);
    } else {
      const image404 = img.toString().replace("wp-content", "uploads");
      setImage(image404);
      setImageAlreadyChanged(true);
    }
  };
  return (
    <>
      {!hideImage && (
        <Image
          className="w-full"
          src={image}
          alt="img"
          width={600}
          height={600}
          style={{ width: "600", height: "auto" }}
          loading="eager"
          priority
        />
      )}
    </>
  );
}
