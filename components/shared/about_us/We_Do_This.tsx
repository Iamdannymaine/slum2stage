import { Triangle } from "lucide-react";
import Section_Heading from "../Section_Heading";
import { BiSolidCircleHalf } from "react-icons/bi";
import { FaCertificate } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";


export default function We_Do_This() {
  return (
    <section className="w-full bg-snow_white min-h-screen py-20">
      <div className="px-4 lg:px-0 items-center justify-center flex flex-col space-y-8 lg:space-y-20">
        <Section_Heading size="48" title="We do this by" />
        {/* Training Programs */}
        <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:w-1/2 order-2 md:order-1"></div>
          <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
            <div className="flex flex-col items-start">
              <div className=" mb-4">
                <PiStarFourFill fill="#056980" className="text-secondary h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold mb-3 font-serif">Training programs</h2>
              <p className="text-slum_gray_600 font-sans font-normal text-sm lg:text-lg leading-[36px] w-full lg:w-[80%]">
                Providing dance and art training program for children and young adults, all year round, free of charge.
              </p>
            </div>
          </div>
        </div>

        {/* Educational Workshops */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <Triangle fill="#9747FF" className="text-slum_magenta h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold mb-3 font-serif">Educational Workshops</h2>
              <p className="text-slum_gray_600 font-sans font-normal text-sm lg:text-lg leading-[36px] w-full lg:w-[80%]">
                Providing educational workshops in schools and community centers, encouraging children to follow their
                passion.
              </p>
            </div>
          </div>
          <div className="md:w-1/2"></div>
        </div>

        {/* Thorough Curriculum */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:w-1/2 order-2 md:order-1"></div>
          <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
            <div className="flex flex-col items-start">
              <div className="text-slum_orange mb-4 rotate-90">
                <BiSolidCircleHalf fill="#FFC645" className="text-slum_orange h-8 w-8 lg:w-6 lg:h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-3 font-serif">Thorough Curriculum</h2>
              <p className="text-slum_gray_600 font-sans font-normal text-sm lg:text-lg leading-[36px] w-full lg:w-[80%]">
                Working with schools to develop their teaching curriculum to inculcate social - emotional and behavioral
                skills, in other to create a better learning environment for children.
              </p>
            </div>
          </div>
        </div>

        {/* After school Programs */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <FaCertificate fill="#EC3BC0" className="text-slum_pink h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold mb-3 font-serif">After school Programs</h2>
              <p className="text-slum_gray_600 font-sans font-normal text-sm lg:text-lg leading-[36px] w-full lg:w-[80%]">
                Creating After-School programs to follow up on and support the academic learning progress of our
                students.
              </p>
            </div>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </div>
    </section>
  )
}
