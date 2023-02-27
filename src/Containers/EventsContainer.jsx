import React from 'react'
import {Technical, OnlineEvents} from '../Events'

const EventsContainer = () => {
  return (
    <div id='events' className='scroll-mt-20'>
        <div className='text-center text-lg sm:text-5xl font-semibold sm:my-2'>EVENTS</div>
        <Technical />
        <OnlineEvents />
    </div>
  )
}

export default EventsContainer