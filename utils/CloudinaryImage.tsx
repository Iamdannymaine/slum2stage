"use client"

import { CldImage } from "next-cloudinary";

import { CloudinaryImageOptions } from "@/types";

import { CloudinaryResource } from "@/types/CloudinaryRescourceType";

export function CloudinaryImage({
  public_id,
  width = 400,
  height = 300,
  className = "",
  transformations = {},
  overlays = [],
  effects = [],
}: CloudinaryResource & CloudinaryImageOptions) {
  return (
    <CldImage
      src={public_id}
      alt="team-member"
      width={width}
      height={height}
      className={className}
      loading="lazy"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      format="webp"
      quality="auto"
      crop="fill"
      {...transformations}
    />
  );
}