import React from "react";


export const Section_Paragraph = ({ paragraph }: { paragraph: string }) => {
  return (
    <div className="w-full lg:w-[70%]">
      <p className="font-sans font-normal text-slum_gray_900 text-sm md:text-lg lg:text-xl leading-[40px]">
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
