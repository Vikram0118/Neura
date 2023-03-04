import React from 'react'
import { Title, Card } from '../../Components'

const OnlineEvents = () => {
  return (
    <div className='max-w-6xl mx-auto text-2xl px-2 '>
      <Title text=' 🎮 Gaming Events'/>
      <div className='container mx-auto py-3'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5'>
          <Card title='BGMI' description='Where team matters than individual' linkTo ='/Gaming/BGMI'/>
          <Card title='Clash Royale' description='Where team matters than individual' linkTo ='/Gaming/ClashRoyale'/>
          <Card title='Mini Milita' description='Where team matters than individual' linkTo ='/Gaming/MiniMilita'/>
          <Card title='Bomb Squad' description='Where team matters than individual' linkTo ='/Gaming/BombSquad'/>
          <Card title='Free Fire' description='Where team matters than individual' linkTo ='/Gaming/FreeFire'/>
        </div>
      </div>
    </div>
  )
}

export default OnlineEvents