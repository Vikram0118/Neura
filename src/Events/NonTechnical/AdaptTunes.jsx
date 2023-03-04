import React from 'react'
import { Link } from 'react-router-dom';
import {logo} from '../import';
import {WordRight} from '../../Components'

const AdaptTunes = () => {
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

          <WordRight text='Adapt Tunes' />
          <div className='flex flex-col mx-2 text-left gap-2 '>
            <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 100 </div>
            <div>
              <p className='font-medium text-lg sm:text-xl'>RULES </p>
              <ul className='flex flex-col gap-2 text-base sm:text-lg my-3'> 
                <li>1. EACH TEAM SHOULD HAVE 3 MEMBERS. </li>
                <li>2. ONE INTERMIDIATE LEVEL QUESTION WILL BE GIVEN. </li>
                <li>3. FIRST ONE FROM THE TEAM WILL START SOLVING THE PROBLEM. </li>
                <li>4. AFTER 15 MINUTES SECOND PERSON HAVE TO CONTINUE SOLVING THE SAME PROBLEM THEN CONTINUED BY THE THIRD PERSON. </li>
                <li>( SWAPPING OF TEAM MATE WILL BE DONE ONLY AFTER 15 MIN AND EACH TEAM MATE NEED TO WORK FOR 15 MINUTES BEFORE SWAPPING )</li>
                <li className='font-medium'>5. TEAM MATES ARE NOT ALLOWED TO DISCUSS IN BETWEEN. </li>
                <li>6. FIRST TEAM TO COME UP WITH A SOLUTION WINS. </li>
                <li>7. IF TWO TEAM COMPLETES AT THE SAME TIME THEN TIME COMPLEXITY WILL BE CONSIDERED. </li>
              </ul>
            </div>
            <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION</span> : ONLY SPOT REGISTACTION</div>
            <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : VIKRAM - 9443615349</div>

          </div>

        </div>
      </div>
  )
}

export default AdaptTunes