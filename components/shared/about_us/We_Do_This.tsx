import { Triangle } from "lucide-react";
import { Section_Heading } from "../Section_Heading";
import { BiSolidCircleHalf } from "react-icons/bi";
import { FaCertificate } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

export default function We_Do_This() {
  return (
    <section className="w-full bg-snow_white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center space-y-20">
        <Section_Heading lgSize="56px" title="We do this by" />

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full justify-items-center text-center">
          {/* Training Programs */}
          <div className="flex flex-col items-center">
            <PiStarFourFill fill="#056980" className="h-6 w-6 mb-4" />
            <h2 className="text-2xl font-bold mb-3 font-serif">Training programs</h2>
            <p className="text-slum_gray_600 font-sans text-sm lg:text-base leading-relaxed max-w-xs">
              Providing dance and art training program for children and young adults, all year round, free of charge.
            </p>
          </div>

          {/* Educational Workshops */}
          <div className="flex flex-col items-center">
            <Triangle fill="#9747FF" className="h-6 w-6 mb-4" />
            <h2 className="text-2xl font-bold mb-3 font-serif">Educational Workshops</h2>
            <p className="text-slum_gray_600 font-sans text-sm lg:text-base leading-relaxed max-w-xs">
              Providing educational workshops in schools and community centers, encouraging children to follow their
              passion.
            </p>
          </div>

          {/* Thorough Curriculum */}
          <div className="flex flex-col items-center">
            <BiSolidCircleHalf fill="#FFC645" className="h-6 w-6 mb-4 rotate-90" />
            <h2 className="text-2xl font-bold mb-3 font-serif">Thorough Curriculum</h2>
            <p className="text-slum_gray_600 font-sans text-sm lg:text-base leading-relaxed max-w-xs">
              Working with schools to develop their teaching curriculum to inculcate social-emotional and behavioral
              skills, to create a better learning environment for children.
            </p>
          </div>

          {/* After School Programs */}
          <div className="flex flex-col items-center">
            <FaCertificate fill="#EC3BC0" className="h-6 w-6 mb-4" />
            <h2 className="text-2xl font-bold mb-3 font-serif">After school Programs</h2>
            <p className="text-slum_gray_600 font-sans text-sm lg:text-base leading-relaxed max-w-xs">
              Creating After-School programs to follow up on and support the academic learning progress of our students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
