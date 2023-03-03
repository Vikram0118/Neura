import React from 'react'
import {EventsContainer} from './index'
import {AboutUs, OurTeam} from '../Components'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Body = () => {
  return (
    <div className='' >
      {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
      <AboutUs />
      {/* </AnimationOnScroll> */}
      <EventsContainer />
      {/* <OurTeam /> */}
    </div>
  )
}

export default Body