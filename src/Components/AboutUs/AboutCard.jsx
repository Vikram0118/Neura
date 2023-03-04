import React from 'react'

const AboutCard = ({img, title, desc, linkTo}) => {
  return (
    <div class="mx-auto max-w-5xl items-center">
        <div class="about_card w-full rounded-md ">
            <div className=' w-full bg-white-custom bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 p-3 rounded-md mx-3 my-15 sm:mx-auto flex flex-row gap-2 '>
                <img src={img} className='w-20 h-24 sm:w-48 sm:h-48' />
                <div className=' flex flex-col items-center justify-start gap-2'>
                    <a href={linkTo} target='_blank'>
                        <div className=' text-sm sm:text-3xl font-medium'>{title}</div>
                    </a>
                    <div className='font-extralight md:text-xl'>{desc}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCard

{/* <div class="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
  <div class="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
  </div>
</div> */}