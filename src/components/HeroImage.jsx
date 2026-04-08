"use client";
import Image from "next/image";

export default function HeroImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={450}
      className="object-contain drop-shadow-2xl"
      priority
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
