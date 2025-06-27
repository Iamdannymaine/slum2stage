"use client"

import React from 'react';
import { Section_Heading } from '../Section_Heading';
import { Image } from '@heroui/image';
import { PiStarFourFill } from "react-icons/pi";
import { FaCertificate } from "react-icons/fa";
import { PiPentagonFill } from "react-icons/pi";
import NextImage from 'next/image';
import Copy from '../navigation/Text_Reveal_Animation';


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
    'top-right': '-top-2 -right-5',
    'top-left': '-top-4 -left-2',
    'bottom-right': 'lg:top-2 -top-2 -right-2'
  };

  // const mobilePositionClasses = {
  //   'top-right': '-top-4 -right-5',
  //   'bottom-right': '-bottom-4 -right-2',
  //   'bottom-left': 'bottom-[5rem] -left-2',
  // };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start lg:bg-[#D9D9D9] lg:rounded-lg lg:p-8">
      <div>
        <Copy>
          <h2 className="text-6xl font-bold mb-6 font-sf-display text-[#1E1E1E]">{year}.</h2>
        </Copy>
        <div className="space-y-3">
          {items.map((item, index) => (
            <Copy delay={0.2} key={index}>
              <p key={index} className="flex items-start font-sf-display font-medium text-sm lg:text-base leading-[36px] lg:leading-[32px]">
                {item}
              </p>
            </Copy>
          ))}
        </div>
      </div>
      <div className="relative w-full h-full overflow-visible">
        <div className={`absolute lg:${positionClasses[svgPosition]} z-50`}>
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
          height={500}
          className="object-contain z-0"
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
        "The Maiden Event Launch.The initiative was kicked off through a fundraising event which held on the 24th of July, 2022 at the Transcorp Hilton.This event encompassed of performances from child and adult ballet dancers, including beneficiaries of the STS training program, and an art exhibition / charity auction with photo prints illustrating the beauty of ballet, in conjunction with professional beauty and dance photographers like Seun Oderinde and Habila Sani",
        "Arts Exhibition.Exhibited original artistic artworks at the African Creative Market Global, raising funds for children to have free dance trainings. ",
        "Dance Workshops.In collaboration with Adila Dance Acrobatics, Slum to Stage has successful trained over fifty children and young adults in Abuja.Furthermore, a special, free, intensive 3-month training program for more beneficiaries of the STS initiative will launch in January 2023"
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
        "First School Tour.As part of the goal develop the key cognitive and social - emotional skills vital to success in school and work, Slum to Stage embarked on a dance tour, visiting schools across Abuja to create enlightenment and work hand in hand with management & guardians to provide dance training for the students.The School tour started in October 2022, and will continue all the way to the first quarter of 2023.",
        "We had our second Slum to Stage Event, themed Dance through the Eyes of Humanity ",
        "We partnered with the French Embassy and the French Institut in activism against SGBV, during the 16 days activism against SGBV.",
        "We lost our physical training space "
      ],
      imageSrc: "/assets/images/about-us/2023.png",
      imageAlt: "2023 accomplishments",
      icon: FaCertificate,
      iconColor: "#95D5E4",
      svgPosition: "top-left",
      svgPositionMobile: "top-right",
    },
    {
      year: "2024",
      items: [
        "We performed at TEDx Maitama",
        "We partnered with SHUSHI to provide a space for the children and young adults to train in.",
        "We hosted our third annual event at the congress hall of Transcop Hilton Abuja, opening our doors and giving 30 dancers the chance to perform at the reimagination of Chinua Achebe’s Things Fall Apart. ",
        "We performed to Ty Bello’s “Africa Awake” on invitation by the Olu of Warri to The Kings Banquet, a ceremony that marked the end of the grand opening of Elevate Africa.",
        "Our Executive Director taught dance through the Slum to Stage program to young adults from underserved areas in Benin Republic.",
        "We performed at the Transcorp Hilton Lighting Ceremony.",
        "We partnered with TDL Solutions.",
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
        <div className="max-w-7xl mx-auto py-8 space-y-20 px-4 md:px-8 lg:px-16">
          {yearData.map((data, index) => (
            <YearSection key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Our_Story;