import React from 'react'
import { Image } from '@heroui/image'
import { Chidinma_Paragraph } from './Chidinma_Paragraph'
import Button from './Slum_Button'
import { useRouter } from 'next/navigation'


const Chidinma_Story = () => {
  const router = useRouter();

  const handleFullStory = () => {
    router.push("/")
  }
  return (
    <section className="w-full bg-secondary grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 overflow-hidden">

      <div className="block lg:hidden relative w-full aspect-square -top-2">
        <Image
          loading="lazy"
          src="/assets/images/chidinma-mobile.png"
          className="object-cover"
        />
      </div>

      <div className="hidden lg:flex relative w-full aspect-square -mt-4 mb-20">
        <Image
          src="/assets/images/chidinma.png"
          radius="lg"
          className="object-cover"
        />
      </div>


      <div className="flex flex-col col-span-2 p-4 lg:p-8 pt-0 lg:pt-32 items-start justify-start">
        <div className="flex flex-col space-y-2 lg:space-y-8">
          <h3 className="font-sans font-bold text-sm lg:text-xl text-white">Why we do it?</h3>
          <p className="font-serif font-normal text-lg lg:text-[56px] text-white">Chidinma&apos;s story</p>
          <p className="font-sans font-bold text-sm lg:text-xl text-white">- a student in the program</p>
        </div>

        <div className="block lg:hidden mt-4 mb-8 lg:mt-8 space-y-4">
          <Chidinma_Paragraph paragraph={`Chidimma is a seven-year-old girl living in a small community in Abuja. She attends an affordable government school in Gwarimpa. Before Chidimma leaves for school on most days,
             her parents are usually engaged in heated arguments. Although she is seated in class...`} />

          <Button
            variant='pill-filled'
            text='Read full story'
            onClick={handleFullStory} />
        </div>
        <div className="hidden lg:flex flex-col lg:flex-row gap-12 mt-4 lg:mt-8">
          <Chidinma_Paragraph
            paragraph={`Chidimma is a seven-year-old girl living in a small community in Abuja. She attends an affordable government school in Gwarimpa. Before Chidimma leaves for school on most days, her parents are usually engaged in heated arguments. Although she is seated in class, 

Chidimma’s mind wanders off – reliving her experiences at home and dreaming of a life under different circumstances. Several times, she imagines herself on a stage, dancing to a crowd or, to her own shadow, twirling and taking giant leaps with the aim of reaching for the stars. On these days, she is snapped back to reality by her teacher’s sudden yell.`}
          />
          <Chidinma_Paragraph
            paragraph={`This is often followed by a question asked for the sole purpose of humiliating her for ‘lack of attention’ in class. Chidimma joined the Slum to Stage program, and here, she is taught movements and routines that enhance her memory. When she makes a mistake, 

Chidimma is corrected with compassion by her dance instructor and teammates, further emphasizing the importance of team work. Chidmma is also encouraged to create dance routines of her own which she teaches to the other dancers. This has brought about a significant shift and increase in her confidence and self-esteem.
`}
          />
        </div>
      </div>
    </section>

  )
}

export default Chidinma_Story