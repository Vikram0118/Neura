import React from 'react'
import {wave, logo} from './import'

const Footer = () => {
  return (
    <div className='mt-20 '>
      <div className='flex flex-col items-center justify-center gap-2 '>
        <div className='flex flex-col items-center'>
          <img src={logo} className='w-24 h-24 md:w-48 md:h-48'  />
          <p className='text-2xl md:text-3xl font-normal '>NEURA 2023</p>
        </div>
        
        <div className='text-xs sm:text-base font-normal '>
          Copyright &#169; 2023
        </div>
        <div className='text-xs md:text-base font-thin'>
          Built by <a href="https://www.linkedin.com/in/vikram-palani" target='_blank'>
                      <span className='hover:text-purple hover:underline hover:underline-offset-2 hover:font-light '>&lt;Vikram/&gt;</span>
                      <span className='animate-pulse'>🖤</span>
                    </a> 
        </div>
      </div>
      <img src={wave} className='w-screen' />

     </div>
  )
}

export default Footer