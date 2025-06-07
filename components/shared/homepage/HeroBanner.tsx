"use client"

import React, { useRef } from 'react';

import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Button from '../Slum_Button';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useRouter } from 'next/navigation';



export const HeroSlider = () => {
  const router = useRouter();
  const swiperRef = useRef<SwiperClass | null>(null);


  const handleDonation = () => {
    router.push("/donate")
  }

  return (
    <section>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="heroBg"
      >
        <SwiperSlide className="swiper-slide1 group">
          <div className='sliderImage w-full'>
            <Image
              loading="lazy"
              src="/assets/images/slide-4.jpg"
              alt="Every child deserves to be happy!"
              width={1280}
              height={600}
              className="object-cover w-full h-[80vh] md:h-[100vh] rounded-none border-none"
            />
          </div>

          <div className="flex items-start justify-start">
            <div className="max-w-7xl mx-auto py-12 md:py-16 flex flex-col 
            md:flex-row gap-8 md:gap-16 mb-8 px-4 lg:px-0">
              <div className="w-full lg:w-1/2">

                <h1 className="block lg:hidden text-[32px] font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800">
                  Every child deserves to be happy!
                  <span className="hidden lg:block h-4 w-[24rem] bg-primary_border -mt-4 ml-1"></span>
                </h1>

                <h1 className="hidden lg:block text-6xl font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800">
                  Every child <br />deserves <br /> to be happy!
                  <span className="hidden lg:block h-4 w-[21rem] bg-primary_border -mt-4 ml-1"></span>
                </h1>
              </div>
              <div className="md:w-1/2">
                <p className="text-[16px] md:text-lg lg:text-xl font-normal mb-6 text-start font-sans">
                  Slum to Stage Uses Dance to Retain the Interest of 290 Children in Schools.
                </p>
                <div className="flex gap-4">
                  <Button variant="circular-filled" text="Donate" onClick={handleDonation} />
                  <Button variant="pill-outlined" text="Learn More" onClick={handleDonation} />
                </div>
              </div>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide className="swiper-slide2">
          <div className='sliderImage w-full'>
            <Image
              loading="lazy"
              src="/assets/images/slide-4.png"
              alt="Every child deserves to be happy!"
              width={1280}
              height={600}
              className="object-cover w-full h-[80vh] md:h-[100vh] rounded-none border-none"
            />
          </div>
          <div className="flex items-start justify-start">
            <div className="container max-w-7xl mx-auto py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-16 mb-8 px-6 lg:px-0">
              <div className="w-full lg:w-1/2">
                <h1 className="block lg:hidden text-[32px] font-serif font-normal leading-tight whitespace-pre-line text-start text-slum_gray_800">
                  Bring dance & joy
                  to government  school
                </h1>

                <h1 className="hidden lg:block text-6xl font-serif font-normal leading-tight whitespace-pre-line text-start text-slum_gray_800">
                  Bring{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">dance & joy</span>
                    <span className="absolute left-0 bottom-1 w-full h-4 bg-primary_border z-0"></span>
                  </span>
                  <br />
                  to government <br /> school.
                </h1>
              </div>
              <div className="md:w-1/2">
                <p className="text-[16px] md:text-lg lg:text-xl font-normal mb-6 text-start font-sans">
                  Inspiring Students Through Movement and in line with the UNESCO Happy Schools  Program.
                </p>
                <div className="flex gap-4">
                  <Button variant="circular-filled" text="Donate" onClick={handleDonation} />
                  <Button variant="pill-outlined" text="Learn More" onClick={handleDonation} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide3">
          <div className='sliderImage w-full'>
            <Image
              loading="lazy"
              src="/assets/images/slide-3.png"
              alt="Every child deserves to be happy!"
              width={1280}
              height={600}
              className="object-cover w-full h-[80vh] md:h-[100vh] rounded-none border-none"
            />
          </div>
          <div className="flex items-start justify-start">
            <div className="container max-w-7xl mx-auto py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-16 mb-8 px-6 lg:px-0">
              <div className="w-full lg:w-1/2">
                <h1 className="block lg:hidden text-[32px] font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800">
                  Partnership with <br />French Embassy.
                </h1>

                <h1 className="hidden lg:block text-6xl font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800">
                  Partnership with <br />French Embassy.
                  <span className={`hidden lg:block h-4 w-[30rem] bg-primary_border -mt-4 ml-1`}></span>
                </h1>
              </div>
              <div className="md:w-1/2">
                <p className="text-[16px] md:text-lg lg:text-xl font-normal mb-6 text-start font-sans">
                  Slum to Stage Partners with the French Embassy in Nigeria in Activism Against SGB.
                </p>
                <div className="flex gap-4">
                  <Button variant="circular-filled" text="Donate" onClick={handleDonation} />
                  <Button variant="pill-outlined" text="Learn More" onClick={handleDonation} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide4">
          <div className='sliderImage w-full'>
            <Image
              loading="lazy"
              src="/assets/images/slide-4.jpg"
              alt="Every child deserves to be happy!"
              width={1280}
              height={600}
              className="object-cover w-full h-[80vh] md:h-[100vh] rounded-none border-none"
            />
          </div>
          <div className="flex items-start justify-start">
            <div className="container max-w-7xl mx-auto py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-16 mb-8 px-6 lg:px-0">
              <div className="w-full lg:w-1/2">
                <h1 className="block lg:hidden text-[32px] font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800">
                  Slum 2 Stage dance production
                  <span className={`hidden lg:block h-4 w-[34rem] bg-primary_border -mt-4 ml-1`}></span>
                </h1>

                <h1 className="hidden lg:block text-6xl font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800">
                  Slum 2 Stage <br />dance production!
                  <span className={`hidden lg:block h-4 w-[30rem] bg-primary_border -mt-4 ml-1`}></span>
                </h1>
              </div>
              <div className="md:w-1/2">
                <p className="text-[16px] md:text-lg lg:text-xl font-normal mb-6 text-start font-sans">
                  Reimagines Chinua Achebe&apos;s  &ldquo;THINGS FALL APART&rdquo; in a Dance Production in Partnership with Transcorp Hilton Abuja
                </p>
                <div className="flex gap-4">
                  <Button variant="circular-filled" text="Donate" onClick={handleDonation} />
                  <Button variant="pill-outlined" text="Learn More" onClick={handleDonation} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};
