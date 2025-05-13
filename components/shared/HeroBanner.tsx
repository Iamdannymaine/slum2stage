"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import Button from './Slum_Button';
import { useRouter } from 'next/navigation';


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
    image:
      "/assets/images/slide-1.jpg",
    title: "Every child\ndeserves\nto be happy!",
    description: "Slum to Stage Uses Dance to Retain the Interest of 290 Children in Schools",
  },
  {
    id: 2,
    image: "/assets/images/slide-2.png?height=600&width=1200",
    title: "Brings dance & joy\nto government\nschools",
    description: "Our programs have reached over 500 children across multiple communities",
  },
  {
    id: 3,
    image: "/assets/images/slide-3.png?height=600&width=1200",
    title: "Partnership with\nFrench Embassy",
    description: "Help us expand our reach and impact more young lives through dance",
  },
  {
    id: 4,
    image: "/assets/images/slide-4.jpg?height=600&width=1200",
    title: "Slum 2 Stage\ndance production",
    description: "Dance education develops discipline, teamwork, and self-expression",
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
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper">
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
              <div className="container max-w-7xl mx-auto py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-16 mb-8">
                <div className="md:w-1/2">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 leading-tight whitespace-pre-line text-start">
                    {slide.title}
                    <span className="block h-1 w-96 bg-sky-400 mt-2"></span>
                  </h1>
                </div>

                <div className="md:w-1/2">
                  <p className="text-xl md:text-2xl text-slate-700 mb-6 text-start font-sans">{slide.description}</p>

                  <div className="flex gap-4">
                    <Button variant="circular-filled" text="Donate" onClick={handleDonation} />
                    <Button variant="pill-outlined" text="Learn More" onClick={handleDonation} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
        )}
      </Swiper>

    </section>
  )
}
