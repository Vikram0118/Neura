import React from 'react'

const OurTeamCard = ({position, name, phone}) => {
  return (
    <div className="w-2xl p-3 sm:p-5 bg-orange border border-blue rounded-lg text-center flex items-center justify-between">
        <p className="mb-2 text-sm sm:text-2xl font-bold tracking-tight text-blue text-left ">{position}</p>
        <div className='text-right'>
            <p className=" mb-3 font-light text-base md:text-xl ">{name}</p>
            <p className=" mb-3 font-light text-base md:text-xl ">{phone}</p>
        </div>
    </div>
  )
}

export default OurTeamCard