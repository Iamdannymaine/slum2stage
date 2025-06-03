import { CloudinaryOgImageOptions } from "@/types";

import { getCldOgImageUrl } from "next-cloudinary";

const CLOUDINARY_FOLDER = "Slum2Stage_Website";

export function getCloudinaryUrl(publicId: string): string {
  return `${CLOUDINARY_FOLDER}/${publicId}`;
}

export function generateOgImageUrl(options: CloudinaryOgImageOptions): string {
  const {
    src,
    width,
    height,
    textOverlays = [],
    imageOverlays = [],
    effects = [],
  } = options;

  const overlays = [
    ...textOverlays.map((text, index) => ({
      text: {
        color: text.color || "white",
        fontFamily: "Source Sans Pro",
        fontSize: text.fontSize,
        fontWeight: text.fontWeight || "normal",
        text: text.content,
        alignment: "center",
        offsetY: text.offsetY || 0,
      },
    })),
    ...imageOverlays.map((image) => ({
      publicId: image.publicId,
      width: image.width,
      position: image.position || {
        gravity: "north_west",
        x: 50,
        y: 50,
      },
    })),
  ];

  return getCldOgImageUrl({
    src,
    width,
    height,
    ...(overlays.length > 0 && { overlays }),
    ...(effects.length > 0 && { effects }),
  });
}

export function getCldImageUrl(options: {
  src: string;
  width?: number;
  quality?: number;
  blur?: number;
  effect?: string;
}) {
  const transformations = [
    options.width && `w_${options.width}`,
    options.quality && `q_${options.quality}`,
    options.blur && `e_blur:${options.blur}`,
    options.effect && `e_${options.effect}`,
    "f_webp", // Always use webp for placeholders
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${options.src}`;
}
