import React from 'react'

const AboutCard = ({img, title, desc, linkTo}) => {
  return (
        <div className='box-border border-2 max-w-5xl shadow-lg p-3 rounded-lg mx-3 my-5 sm:mx-auto flex flex-row gap-2 '>
            <img src={img} className='w-20 h-24 sm:w-48 sm:h-48' />
            <div className=' flex flex-col items-center justify-start gap-2'>
                <a href={linkTo} target='_blank'>
                    <div className=' text-sm sm:text-3xl font-medium'>{title}</div>
                </a>
                <div className='font-extralight md:text-xl'>{desc}</div>
            </div>
        </div>
  )
}

export default AboutCard