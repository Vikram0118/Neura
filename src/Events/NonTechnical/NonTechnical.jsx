import React from 'react'
import { Title, Card } from '../../Components'

const NonTechnical = () => {
  return (
    <div className='max-w-6xl mx-auto text-2xl px-2 scroll-mt-40 '>
      <Title text='💃 NON TECHNICAL EVENTS'/>
      <div className='container mx-auto py-3'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5'>
          <Card title='Adapt Tunes' description='Where team matters than individual' linkTo ='/NonTechnical/AdaptTunes'/>
          <Card title='Back To School' description='Where team matters than individual' linkTo ='/NonTechnical/BackToSch'/>
          <Card title='Eatathon' description='Where team matters than individual' linkTo ='/NonTechnical/Eatathon'/>
          <Card title='Push Ups' description='Where team matters than individual' linkTo ='/NonTechnical/PushUps'/>
          <Card title='Series Quiz' description='Where team matters than individual' linkTo ='/NonTechnical/SeriesQuiz'/>
          <Card title='Solo Dancing' description='Where team matters than individual' linkTo ='/NonTechnical/SoloDancing'/>
          <Card title='Solo Singing' description='Where team matters than individual' linkTo ='/NonTechnical/SoloSinging'/>
          <Card title='Variety Variety Solo' description='Where team matters than individual' linkTo ='/NonTechnical/VarietyVarietySolo'/>
          <Card title='Variety Variety Group' description='Where team matters than individual' linkTo ='/NonTechnical/VarietyVarietyGroup'/>
          <Card title='Treasure Hunt' description='Where team matters than individual' linkTo ='/NonTechnical/TreasureHunt'/>
          <Card title='On Spot PhotoGraphy' description='Where team matters than individual' linkTo ='/NonTechnical/SpotPhoto'/>
        </div>
      </div>
    </div>
  )
}

export default NonTechnical