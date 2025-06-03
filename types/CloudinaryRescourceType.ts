export interface CloudinaryResource {
  asset_id?: string;
  context?: {
    custom?: {
      alt?: string;
      caption?: string;
      source?: string;
    };
  };
  public_id: string;
}

export interface CloudinaryImageOptions {
  width?: number;
  height?: number;
  className?: string;
  transformations?: Record<string, any>;
  overlays?: Array<Record<string, any>>;
  effects?: Array<Record<string, any>>;
}

export interface CloudinaryOgImageOptions {
  src: string;
  width: number;
  height: number;
  textOverlays?: Array<{
    content: string;
    fontSize: number;
    fontWeight?: string;
    color?: string;
    offsetY?: number;
  }>;
  imageOverlays?: Array<{
    publicId: string;
    width: number;
    position?: {
      gravity?: string;
      x?: number;
      y?: number;
    };
  }>;
  effects?: Array<Record<string, any>>;
}
