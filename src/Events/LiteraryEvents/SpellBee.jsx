import React from 'react'
import { Link } from 'react-router-dom';
import {logo} from '../import';
import {WordRight} from '../../Components'
import {Footer} from '../../Containers'

const DebugCode = () => {
  return (
<div>
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
        <WordRight text='DEBUG THE CODE' />
        <div className='flex flex-col mx-2 text-left gap-2 '>
          <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 50 </div>
          <div>
            <p className='font-medium text-lg sm:text-xl'>RULES </p>
              <ul className='flex flex-col gap-2 text-base sm:text-lg my-3'> 
                <li>1. The words will be pronounced by the judges. </li>
                <li>2. The participants must write down the spellings of the pronounced words. </li>
                <li>3. </li>
                <li className='font-extrabold'> NUMBER OF WORDS: 10 </li>
                <li className='font-extrabold'> NUMBER OF WORDS: 10 </li>
              </ul>
          </div>
          <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION</span> : ONLY SPOT REGISTACTION</div>
          <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : VIKRAM - 9443615349</div>
        </div>

      </div>

    </div>  )
}

export default DebugCode