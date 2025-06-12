import React from "react";


export const Chidinma_Paragraph = ({ paragraph }: { paragraph: string }) => {
  return (
    <div className="w-full flex text">
      <p className="font-sans 
      font-normal text-sm 
      lg:text-base leading-[32px]
       lg:leading-[40px] text-white">
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
