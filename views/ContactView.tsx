import React from 'react'
import Section_Heading from '@/components/shared/Section_Heading'
import { Section_Paragraph } from '@/components/shared/Section_Paragraph'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { PhoneCall, Mail as Email } from 'lucide-react'
import Image from 'next/image'

const lists = [
  {
    icon: <PhoneCall className='text-white w-6 h-6' />,
    heading: "Call Us",
    description: "If you would like to talk to our team about business inquiries, please reach us at ",
    boldText: "08176231834",
    iconBg: "bg-sky-500"
  },
  {
    icon: <Email className='text-white w-6 h-6' />,
    heading: "Email",
    description: "If you would like to talk to our team about business inquiries, please reach us at ",
    boldText: "info@slum2stage.org",
    iconBg: "bg-green-600"
  }
]

export const ContactView = () => {
  return (
    <section className='w-full bg-white py-40'>
      <div className='flex flex-col lg:flex-row justify-between max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='lg:w-1/2 space-y-10'>
          <div className='space-y-4'>
            <Section_Heading title='Contact Us' />
            <Section_Paragraph paragraph='We intend to keep up with the rapidly changing world and will love to hear from you!' />
          </div>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            {lists.map((item, index) => (
              <Card key={index} className='shadow-md p-4'>
                <CardHeader className={`rounded-full ${item.iconBg} flex items-center justify-center w-12 h-12`}>
                  {item.icon}
                </CardHeader>
                <CardContent className='p-0'>
                  <h2 className='font-serif font-semibold text-2xl mb-2'>{item.heading}</h2>
                  <p className='font-sans text-base text-slum_gray_700'>
                    {item.description}
                    <strong className='ml-1'>{item.boldText}</strong>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className='lg:w-[40%] mt-12 lg:mt-0 flex items-end justify-end'>
          <div className='w-full h-full'>
            <Image
              src='/assets/images/contact-us.png'
              alt='Contact illustration'
              width={500}
              height={500}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>

      </div>
    </section>
  )
}

