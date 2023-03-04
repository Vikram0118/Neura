import React from 'react'
import { Link } from 'react-router-dom';
import {logo} from '../import';
import {WordRight} from '../../Components'
import {Footer} from '../../Containers'

const Potpourri = () => {
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
      <WordRight text='POT POURRI' />
        <div className='flex flex-col mx-2 text-left gap-2 '>
          <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 100 </div>
          <div>
            <p className='font-medium text-lg sm:text-xl'>RULES </p>
              <ul className='flex flex-col gap-2 text-base sm:text-lg my-3'> 
                <li>1. Each team can have 2 or 3 participants. </li>
                <li>2. The event will consist of 3 rounds with fixed time limits.</li>
                <li><span className='font-medium'>Round 1: Catch Phrase </span>- One person will be shown a list of English words. The clue-giver has to convey the words to the team mates using physical gestures or saying any related words without saying the actual word in any form. The score will be based on the number of words correctly found in 2 minutes.</li>
                <li><span className='font-medium'>Round 2: Pictionary </span>- One person will be shown a list of English words. That person has to convey the words to the team mates by just drawing pictures. The score will be based on the number of words correctly found in 2 minutes.</li>
                <li><span className='font-medium'>Round 3: What's Next? </span>- One member of the team shall start a story based on the given set of words. When the judge says, the next member has to take lead and continue the story from where it was left. The judging will be based on the completeness of the story and how the team members' story syncs.</li>

                
                <div className='bg-backGround rounded-xl py-2 px-5 my-3'>
                <li className='font-medium'>NUMBER OF MEMBERS: 2 or 3 per team</li>
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

export default Potpourri