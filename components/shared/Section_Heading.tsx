interface SectionHeadingProps {
  title: string;
  color?: string;
  lgSize?: '56px' | '72px';
}

export const Section_Heading = ({
  title,
  color = "slum_gray_800",
  lgSize = '72px' // Default to 72px
}: SectionHeadingProps) => {
  // Dynamic class for lg size
  const lgSizeClass = lgSize === '56px' ? 'lg:text-[56px]' : 'lg:text-[72px]';

  return (
    <div>
      <h2
        className={`font-serif font-bold text-${color} text-[28px] md:text-[32px] ${lgSizeClass}`}
      >
        {title}
      </h2>
    </div>
  );
}