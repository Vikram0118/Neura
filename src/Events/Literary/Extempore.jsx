import React from 'react'
import { Link } from 'react-router-dom';
import {logo} from '../import';
import {WordRight} from '../../Components'
import {Footer} from '../../Containers'

const Extempore = () => {
  return (
<div className='bg-white'>
      <div className='bg-backGround w-screen'>
        <div className='max-w-7xl mx-auto flex px-6 py-3 items-center justify-between'>
          <div className=''>
            <a href="" className='flex gap-5 items-center'>
              <img src={logo} className='w-9 h-10'/> 
              <p className='text-lg md:text-xl'>NEURA 2023</p>
            </a>
          </div>

          <div className='flex gap-5 text-sm sm:text-xl'>
          <Link to='/'><button className='rounded-lg px-2 py-1 hover:bg-orange'>BACK</button></Link>
          </div>
        </div>
      </div>
      <div className='flex max-w-6xl flex-col items-center justify-start mt-8  gap-10 mx-2 sm:mx-auto'>
      <WordRight text='EXTEMPORE' />
        <div className='flex flex-col mx-2 text-left gap-2 '>
          <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 100 </div>
          <div>
            <p className='font-medium text-lg sm:text-xl'>RULES </p>
              <ul className='flex flex-col gap-2 text-base sm:text-lg my-3'> 
                <li>1. The participant would be given a random topic on the spot. </li>
                <li>2. The topic may be general or based on well known current issues. </li>
                <li>3. At the end of 2 minutes preparation time, the particpant has to speak their mind on that topic. </li>
                <li>4. The judging shall be based on the content delivered, language and overall presentation. </li>
                
                <div className='bg-backGround rounded-xl py-2 px-5 my-3'>
                <li className='font-medium'>PREPARATION TIME: 2 Minutes</li>
                <li className='font-medium'>DURATION: 3 Minutes</li>
                </div>
              </ul>
          </div>
          <div className='bg-backGround rounded-xl py-2 px-5 my-3 space-y-3'>
            <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION LINK: </span> link.. </div>
            <div className='text-base sm:text-lg'>Spot Registration Available</div>
            <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : C. Sree Vyshnavi - 9843508506</div>
          </div>
        </div>

      </div>

    </div>  )
}

export default Extempore