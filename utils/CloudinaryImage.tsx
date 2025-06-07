"use client";

import React, { useState } from "react";
import { CldImage } from "next-cloudinary";

import { CloudinaryImageOptions } from "@/types";
import { CloudinaryResource } from "@/types/CloudinaryRescourceType";

interface CloudinaryImageProps extends CloudinaryResource, CloudinaryImageOptions {
  fallbackSrc?: string;
  alt?: string;
}

export function CloudinaryImage({
  public_id,
  width = 400,
  height = 300,
  className = "",
  transformations = {},
  overlays = [],
  effects = [],
  fallbackSrc,
  alt = "image",
}: CloudinaryImageProps) {
  const [src, setSrc] = useState(public_id);

  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      format="webp"
      quality="auto"
      crop="fill"
      {...transformations}
      onError={() => {
        if (fallbackSrc && src !== fallbackSrc) {
          setSrc(fallbackSrc);
        }
      }}
    />
  );
}
