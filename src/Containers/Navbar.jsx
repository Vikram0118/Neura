import {useState} from 'react'
import { logo, menu, close } from './import'

const Navbar = () => {
  const [active, setActive] = useState(' ')
  const [toggle, setToggle] = useState(false)

  return (
      <div className='bg-backGround w-screen fixed z-10 backdrop-filter backdrop-blur-lg bg-opacity-50 '>
        <div className='max-w-7xl mx-auto flex px-6 py-3 items-center justify-between'>
          <div className=''>
            <a href="#" className='flex gap-5 items-center' onClick={() =>{ 
                  setActive(' ')
                  window.scrollTo(0, 0)
                }}>
              <img src={logo} className='w-12 h-12 object-contain'/> 
              <p className='text-lg md:text-2xl'>NEURA 2023</p>
            </a>
          </div>

           <div className='hidden sm:block '>
              <div className='flex gap-5 text-xl'>
                <a href="#aboutus"><button className={` ${active === 'aboutus' ? "text-purple" : null} rounded-lg px-2 py-1 hover:bg-orange`} onClick={() => setActive('aboutus')}>ABOUT US</button></a>
                <a href="#events"><button className={` ${active === 'events' ? "text-purple" : null} rounded-lg px-2 py-1 hover:bg-orange`} onClick={() => setActive('events')}>EVENTS</button></a>
              </div>
          </div>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle) } />
            <div className={`${!toggle ? 'hidden' : 'flex flex-col'} p-3 bg-orange absolute top-20 right-0 mx-2  min-w-[100px] z-10 rounded-xl `}>
              <a href="#aboutus"><button className='rounded-lg px-2 py-1 hover:bg-orange' onClick = {() =>{ 
                  setToggle(!toggle) 
                  setActive('aboutus')
                }}>ABOUT US</button></a>
              <a href="#events"><button className='rounded-lg px-2 py-1 hover:bg-orange' onClick = {() =>{
                  setToggle(!toggle) 
                  setActive('events')
                }}>EVENTS</button></a>

            </div>
        </div>

        </div>
      </div>
  )
}

export default Navbar