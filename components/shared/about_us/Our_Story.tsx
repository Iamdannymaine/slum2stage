"use client"

import React from 'react';
import { Section_Heading } from '../Section_Heading';
import { Image } from '@heroui/image';
import { PiStarFourFill } from "react-icons/pi";
import { FaCertificate } from "react-icons/fa";
import { PiPentagonFill } from "react-icons/pi";
import NextImage from 'next/image';

interface YearSectionProps {
  year: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor?: string;
  svgPosition?: 'top-right' | 'top-left' | 'bottom-right';
  svgPositionMobile?: 'bottom-right' | 'top-right' | 'bottom-left';
}

const YearSection: React.FC<YearSectionProps> = ({
  year,
  items,
  imageSrc,
  imageAlt,
  icon: Icon = PiStarFourFill,
  iconColor = "#EC3BC0",
  svgPosition = 'top-right',
  svgPositionMobile = 'bottom-right'
}) => {
  const positionClasses = {
    'top-right': '-top-4 -right-5',
    'top-left': '-top-4 -left-2',
    'bottom-right': '-bottom-16 -right-2',
  };

  const mobilePositionClasses = {
    'top-right': '-top-4 -right-5',
    'bottom-right': '-bottom-4 -right-2',
    'bottom-left': '-bottom-4 -left-2',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
      <div>
        <h2 className="text-6xl font-bold mb-6 font-serif ">{year}.</h2>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start font-sans font-normal text-sm lg:text-base leading-[36px] lg:leading-[32px]">
              <span className="mr-2">•</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-full h-full overflow-visible">
        <div className={`absolute ${mobilePositionClasses[svgPositionMobile]}  lg:${positionClasses[svgPosition]} z-50`}>
          <Icon
            className={`icon h-12 w-12 text-${iconColor} z-50`}
            fill={iconColor}
            stroke="currentColor"
          />
        </div>
        <Image
          loading='lazy'
          as={NextImage}
          src={imageSrc}
          alt={imageAlt}
          width={1000}
          height={800}
          className="object-cover z-0"
        />
      </div>
    </div>
  );
};

interface YearData {
  year: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor?: string;
  svgPosition: "top-right" | "top-left" | "bottom-right";
  svgPositionMobile: "bottom-right" | "top-right" | "bottom-left";
  badgeText?: string;
}

const Our_Story: React.FC = () => {
  const yearData: YearData[] = [
    {
      year: "2022",
      items: [
        "The Heartbeat Launch. This cultural marketplace of Nigeria is something even I didn't foresee but after all, our 2022 at The Heartbeat was a year of many firsts.",
        "SXSW, Afrotech, Afrochella, Homecoming, Felabration, Mainland Block Party, Vibes on the Beach, Jollof and Afrobeats, and all events/shows that we partnered with artists under, supporting the growth of African music from Nigeria to the world.",
        "Our partnership with Davido Worldwide and Martell Flair.",
        "Winning the Martell Cognac Global Challenger Award. Design agency works for companies I can't ever not be proud of.",
        "Davido Worldwide, in collaboration with Martell Nigeria, trusted us to design the set used at Davido's 02 Arena concert using graffiti in Lagos. I'll be forever grateful for the Heartbeat Family's creative courage."
      ],
      imageSrc: "/assets/images/about-us/2022.png",
      imageAlt: "2022 accomplishments",
      icon: PiStarFourFill,
      iconColor: "#EC3BC0",
      svgPosition: "top-right",
      svgPositionMobile: "bottom-right"
    },
    {
      year: "2023",
      items: [
        "FEVE Winery Tour, as part of the post-Grammy Victory concert and wine experience that helped to establish a brand new Winery in the heart of Lagos, Nigeria.",
        "Partnered with Martell Nigeria to create a first of its kind entertainment space, built to serve arts management & guidance to young artists across the West of Africa. The Heartbeat House.",
        "We took our Davido DWWT's Stage work to Martell Cognac through the Timini Egbuson.",
        "We partnered with the Femme It Forward to help a friend's vision in activism against GBV, using arts. It was common sense to join.",
        "We built our first live lighting design."
      ],
      imageSrc: "/assets/images/about-us/2023.png",
      imageAlt: "2023 accomplishments",
      icon: FaCertificate,
      iconColor: "#95D5E4",
      svgPosition: "top-left",
      svgPositionMobile: "top-right"
    },
    {
      year: "2024",
      items: [
        "We partnered with TDL Solutions.",
        "We partnered with SARO to provide a space for the creatives and young artists to live in.",
        "We founded our first cultural event as the creatives lead of Deserves More Think, opening our doors and giving a chance to young artists to showcase their talents through our platform 'Deserves More Talk'.",
        "We partnered with Martell 'Wild Hustler' as invited by the City of Kent to The Pinga Festival, a ceremony that marked the end of Ramadan opening in Banana Island.",
        "Our Heartbeat House Design Course through our Studio in Ikoyi began to give young talents from Lekki, Ikeja and Mainland the opportunity.",
        "We performed at the Paramount Hotel's Lighting Ceremony."
      ],
      imageSrc: "/assets/images/about-us/2024.png",
      imageAlt: "2024 accomplishments",
      svgPosition: "bottom-right",
      svgPositionMobile: "bottom-left",
      icon: PiPentagonFill,
      iconColor: "#9747FF",
      badgeText: "Deserves More"
    }
  ];

  return (
    <section className='bg-white w-full py-20'>
      <div className='flex flex-col space-y-12 px-4 lg:px-0 items-center justify-center'>
        <Section_Heading lgSize='56px' title='Our Story' />
        <div className="max-w-6xl mx-auto py-8 space-y-20">
          {yearData.map((data, index) => (
            <YearSection key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Our_Story;