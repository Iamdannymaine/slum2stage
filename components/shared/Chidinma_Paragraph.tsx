import React from "react";


export const Chidinma_Paragraph = ({ paragraph }: { paragraph: string }) => {
  return (
    <div className="w-full flex">
      <p className="font-sans font-normal text-sm md:text-lg lg:text-[16px] leading-[40px] text-white">
        {paragraph.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};
