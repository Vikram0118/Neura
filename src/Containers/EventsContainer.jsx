import React from 'react'
import {Technical, OnlineEvents ,Literary, NonTechnical} from '../Events'

const EventsContainer = () => {
  return (
    <div id='events' className='scroll-mt-20 '>
        <div className='text-center text-xl sm:text-5xl sm:mt-10 text-gold font-cinel'>EVENTS</div>
          <Technical />
          <NonTechnical />
          <OnlineEvents />
          <Literary />
    </div>
  )
}

export default EventsContainer