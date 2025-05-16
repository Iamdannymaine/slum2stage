import { Card } from "@heroui/react";
import Image from "next/image";
import { imagesData } from "@/json";


export function ImageGrid() {


  return (
    <div className="w-full lg:w-1/2 gallery bg-[#FFDAB9] rounded-none">
      {imagesData.map((src, index) => (
        <Card
          key={index}
          className="relative rounded-none"
        >
          <Image
            src={src}
            alt={`Dance image ${index + 1}`}
            className="object-cover w-full h-full"
            width={500}
            height={500}
          />
        </Card>
      ))}
    </div>
  );
}
