import Image from "next/image";

interface ImageData {
  src: string;
  alt?: string;
}

interface PinterestMasonryProps {
  column1Images: ImageData[];
  column2Images: ImageData[];
}

export const PinterestMasonry = ({ column1Images, column2Images }: PinterestMasonryProps) => {
  return (
    <div className="flex justify-center bg-[#FFEEE5]">
      <div className="flex group relative mx-auto w-full
      overflow-hidden overflow-y-visible before:absolute before:left-0
       before:top-0 before:z-[2] before:h-full after:content-['']">
        {/* Column 1 - will scroll up */}
        <div className="flex flex-col ml-4">
          {column1Images.map((image, index) => (
            <div
              key={`col1-img-${index}`}
              className={`mb-4 overflow-hidden w-80 `}
            >
              <Image
                src={image.src}
                alt={image.alt || `Image ${index}`}
                width={700}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Column 2 - will scroll down */}
        <div className="flex flex-col ml-4">
          {column2Images.map((image, index) => (
            <div
              key={`col2-img-${index}`}
              className={`mb-4 overflow-hidden w-80 `}
            >
              <Image
                src={image.src}
                alt={image.alt || `Image ${index}`}
                width={700}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};