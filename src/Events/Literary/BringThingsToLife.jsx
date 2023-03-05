import React from 'react'
import { Link } from 'react-router-dom';
import {logo, bringThingsToLife} from '../import';
import {IndividualTitle} from '../../Components'

const BringThingsToLife = () => {
  return (
    <div className='bg-white'>
        <div className='bg-black w-full z-10 backdrop-filter backdrop-blur-lg bg-opacity-[40%] '>
          <div className='max-w-7xl mx-auto flex px-6 py-3 items-center justify-between'>
            <div className='flex gap-5 items-center'>
                <img src={logo} className='w-9 h-10'/> 
                <p className='text-lg md:text-2xl text-white font-cinel'>NEURA 2K23</p>
            </div>
            <div className='flex gap-5 text-sm sm:text-xl'>
              <Link to='/'><button className='rounded-lg px-2 py-1 hover:bg-orange'>BACK</button></Link>
            </div>
          </div>
        </div>

        <div className='flex max-w-6xl h-auto flex-col items-center justify-start mt-8 gap-10 mx-2 sm:mx-auto'>
          <IndividualTitle text='BRING THINS TO LIFE' />
          <div className='sm:flex'>
            <img src={bringThingsToLife} alt="" className='svg-hidden sm:w-96 sm:h-96'/>
            <div className='flex flex-col mx-2 text-left gap-2 '>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 100 </div>
              <div>
                <p className='font-medium text-lg sm:text-xl'>RULES : </p>
                <ul className='flex flex-col gap-2 text-b ase sm:text-lg my-3'> 
                  <li>1. EACH TEAM SHOULD HAVE 2 MEMBERS. </li>
                  <li>2. ONE INTERMIDIATE LEVEL QUESTION WILL BE GIVEN. </li>
                  <li>3. AFTER DISCUSSING FOR 5 MINUTES FIRST ONE FROM THE TEAM WILL START SOLVING THE PROBLEM. </li>
                  <li>4. AFTER 10 MINUTES SECOND PERSON HAVE TO CONTINUE SOLVING THE SAME PROBLEM. </li>
                  <li className='font-light'>( SWAPPING OF TEAM MATE WILL BE DONE ONLY AFTER 10 MIN AND EACH TEAM MATE NEED TO WORK FOR 10 MINUTES BEFORE SWAPPING )</li>
                  <li>5. FIRST TEAM TO COME UP WITH A SOLUTION WINS. </li>
                  <li>6. IF TWO TEAM COMPLETES AT THE SAME TIME THEN TIME COMPLEXITY WILL BE CONSIDERED. </li>
                </ul>
              </div>
              <div className='bg-backGround rounded-xl py-2 px-5 space-y-3'>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION</span> : ONLY SPOT REGISTACTION</div>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : VIKRAM - 9443615349</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default BringThingsToLife