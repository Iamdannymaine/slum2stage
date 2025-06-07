'use client';

import React from 'react';
import { CloudinaryImage } from '@/utils';
interface MissionProps {
  cloudinaryPublicId: string;
  fallbackImage: string;
  imagePosition: 'top' | 'bottom';
  title: string;
  description: string;
  position: 'left' | 'right';
}

const content: MissionProps[] = [
  {
    cloudinaryPublicId: 'Slum2Stage_Website/bottom_xkg8oc',
    fallbackImage: '/assets/images/about-us/bottom.png',
    imagePosition: 'bottom',
    title: 'mission',
    description:
      'The mission for Slum to Stage is to build safe communities and capacities of children and young adults, equipping them with the artistic, social, behavioral and emotional skills needed to make them better creative and holistic individuals in their communities.',
    position: 'right',
  },
  {
    cloudinaryPublicId: 'Slum2Stage_Website/top_bzrobq',
    fallbackImage: '/assets/images/about-us/top.png',
    imagePosition: 'top',
    title: 'vision',
    description:
      'We envision a society in which children and young adults are mentally safe, treated with respect and dignity, and have equal opportunities to activate, develop and pursue their talents and artistic abilities, while excelling in their academics.',
    position: 'left',
  },
];

export const Mission_Vision: React.FC = () => {
  return (
    <section className="hidden lg:flex w-full bg-smoke_white min-h-screen py-20 flex-col space-y-16">
      <div className="max-w-7xl mx-auto">
        {content.map((item, index) => (
          <div
            key={index}
            className={`flex w-full items-start justify-between gap-20 mb-20 ${item.position === 'right' ? 'flex-row' : 'flex-row-reverse'
              }`}
          >
            <div className="w-1/2">
              <CloudinaryImage
                public_id={item.cloudinaryPublicId}
                fallbackSrc={item.fallbackImage}
                alt={`${item.title} image`}
              />
            </div>

            <div className="w-1/2 text-start pt-10">
              <h2 className="text-5xl font-bold capitalize mb-6 font-serif text-slum_gray_800">
                {item.title}
              </h2>
              <p className="text-lg leading-[36px] text-slum_gray_600 font-sans w-[80%]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
