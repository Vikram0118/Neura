import React from 'react'
import {logo} from './import'
import {WordLeft, WordRight} from '../Components'

const Header = () => {
  return (
    
    <div className='h-screen max-w-6xl flex items-center justify-between mx-auto'>
        <div className='flex flex-col items-center mx-auto justify-center md:flex-row gap-2'>
            <img className='w-24 h-24 md:w-1/2 md:h-full' src={logo} />
            <div className='flex flex-col justify-between px-6'>
                <p className='text-4xl md:text-6xl text-center'>NEURA 2023</p>
                <WordRight text='This is the slogan we choose'/>
                <WordLeft text='March 13 & 14'/>
            </div>
        </div>
    </div>

  )
}

export default Header