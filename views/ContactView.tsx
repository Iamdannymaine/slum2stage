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
    iconBg: "#44B5D0",
    carBg: "#F7FCFD"
  },
  {
    icon: <Email className='text-black w-6 h-6' />,
    heading: "Email",
    description: "If you would like to talk to our team about business inquiries, please reach us at ",
    boldText: "info@slum2stage.org",
    iconBg: "#FFBB99",
    cardBg: "#FFF8F5"
  }
]

export const ContactView = () => {
  return (
    <section className='w-full bg-white pt-40 pb-40 lg:pb-0 flex lg:flex-row justify-between'>
      <div className='lg:w-1/2 space-y-10 px-6 lg:p-20 lg:ps-32'>
        <div className='space-y-4'>
          <Section_Heading title='Contact Us' />
          <Section_Paragraph paragraph='We intend to keep up with the rapidly changing world and will love to hear from you!' />
        </div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {lists.map((item, index) => (
            <Card key={index} className='shadow-md p-4 space-y-3' style={{ backgroundColor: item.cardBg }}>
              <CardHeader
                className='flex items-center justify-center w-12 h-12 p-2 rounded-full'
                style={{ backgroundColor: item.iconBg }}
              >
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

      <div className='lg:w-1/2 lg:mt-0 justify-end items-end hidden lg:flex'>
        <div className='w-full h-full'>
          <Image
            src='/assets/images/contact-us.png'
            alt='Contact illustration'
            width={1000}
            height={1000}
            className='w-full h-full object-cover rounded-none'
          />
        </div>
      </div>

    </section>
  )
}

