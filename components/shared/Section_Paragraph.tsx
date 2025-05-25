import React from "react";


interface SectionParagraphProps {
  paragraph: string
  color?: string
  width?: string
  size?: string
}

export const Section_Paragraph = (
  {
    paragraph,
    color = "slum_gray_900",
    width = "70%",
    size = "base"
  }: SectionParagraphProps
) => {
  return (
    <div className={`w-full lg:w-[${width}]`}>
      <p className={`font-sans font-normal text-${color} text-sm lg:text-${size} leading-[36px] lg:leading-[32px]`}>
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
