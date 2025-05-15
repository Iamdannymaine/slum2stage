"use client"


import Image from 'next/image';
import Button from './Slum_Button';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, } from 'swiper/modules';


// Define the slide type
type Slide = {
  id: number
  image: string
  title: string
  description: string
}

// Sample slides data
const slides: Slide[] = [
  {
    id: 1,
    image: "/assets/images/slide-3.png?height=600&width=1200",
    title: "Partnership with\nFrench Embassy",
    description: "Slum to Stage Partners with the French Embassy in Nigeria in Activism Against SGB",
  },
  {
    id: 2,
    image: "/assets/images/slide-4.jpg?height=600&width=1200",
    title: "Slum 2 Stage\ndance production",
    description: "Reimagines Chinua Achebe's “THINGS FALL APART” in a Dance Production in Partnership with Transcorp Hilton Abuja",
  },
]


export function HeroCarousel() {

  const router = useRouter();

  const handleDonation = () => {
    router.push("/donate")
  }


  return (
    <section className="relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper relative pb-10"
      >
        <SwiperSlide>
          <div className="relative h-[80vh] w-full">
            <Image
              loading="lazy"
              src="/assets/images/slide-1.jpg?height=600&width=1200"
              alt="Every child deserves to be happy!"
              fill
              priority
              className="object-cover"
            />

          </div>

          <div className="flex items-start justify-start">
            <div className="max-w-7xl mx-auto py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-16 mb-8 px-6 lg:px-0">
              <div className="md:w-1/2">
                <h1 className="text-[32px] md:text-[36px] lg:text-6xl font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800">
                  Every child <br />deserves <br /> to be happy!
                  <span className="hidden lg:block h-4 w-[24rem] bg-primary_border -mt-4 ml-1"></span>
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

        <SwiperSlide>
          <div className="relative h-[80vh] w-full">
            <Image
              src="/assets/images/slide-1.jpg?height=600&width=1200"
              alt="Every child deserves to be happy!"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex items-start justify-start">
            <div className="container max-w-7xl mx-auto py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-16 mb-8 px-6 lg:px-0">
              <div className="md:w-1/2">
                <h1 className="text-[32px] md:text-[36px] lg:text-6xl font-serif font-normal leading-tight whitespace-pre-line text-start text-slum_gray_800">
                  Bring{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">dance & joy</span>
                    <span className="hidden lg:absolute left-0 bottom-1 w-full h-4 bg-primary_border z-0"></span>
                  </span>
                  <br />
                  to government <br /> school
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

        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[80vh] w-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>

            <div className="flex items-start justify-start">
              <div className="container max-w-7xl mx-auto py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-16 mb-8 px-6 lg:px-0">
                <div className="md:w-1/2">
                  <h1 className="text-[32px] md:text-[36px] lg:text-6xl font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800">
                    {slide.title}.
                    <span className={`hidden lg:block h-4 ${index === 1 ? "w-[34rem]" : "w-[32rem]"} bg-primary_border -mt-4 ml-1`}></span>
                  </h1>
                </div>
                <div className="md:w-1/2">
                  <p className="text-[16px] md:text-lg lg:text-xl font-normal mb-6 text-start font-sans">
                    {slide.description}.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="circular-filled" text="Donate" onClick={handleDonation} />
                    <Button variant="pill-outlined" text="Learn More" onClick={handleDonation} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section >
  );
}