import React from "react";


export const Section_Paragraph = ({ paragraph, color, width }: { paragraph: string, color?: string | "slum_gray_900", width?: string | "70" }) => {
  return (
    <div className={`w-full lg:w-${width}`}>
      <p className={`font-sans font-normal text-${color} text-sm lg:text-base leading-[36px] lg:leading-[32px]`}>
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
