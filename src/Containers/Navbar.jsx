import React from 'react'
import { logo } from './import'

const Navbar = () => {
  return (
      <div className='bg-backGround w-screen fixed z-10 backdrop-filter backdrop-blur-lg bg-opacity-50 '>
        <div className='max-w-7xl mx-auto flex px-6 py-3 items-center justify-between'>
          <div className=''>
            <a href="" className='flex gap-5 items-center'>
              <img src={logo} className='w-9 h-10'/> 
              <p className='text-lg md:text-xl'>NEURA 2K23</p>
            </a>
          </div>

           <div className='hidden lg:block '>
              <div className='flex gap-5 text-xl'>
                <a href="#aboutus"><button className='rounded-lg px-2 py-1 hover:bg-orange'>ABOUT US</button></a>
                <a href="#events"><button className='rounded-lg px-2 py-1 hover:bg-orange'>EVENTS</button></a>
                <a href=""><button className='rounded-lg px-2 py-1 hover:bg-orange'>CONTACT</button></a>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar