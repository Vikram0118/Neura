import React from 'react'
import { Title, Card } from '../../Components'

const OnlineEvents = () => {
  return (
    <div className='max-w-6xl mx-auto text-2xl px-2 '>
      <Title text=' 👨‍💻 Online Events'/>
      <div className='container mx-auto py-3'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5'>
          <Card title='Bgmi' description='Where team matters than individual'/>
          <Card title='Clash Royale' description='Where team matters than individual'/>
          <Card title='Mini Milita' description='Where team matters than individual'/>
          <Card title='Bomb Squad' description='Where team matters than individual'/>
          <Card title='Vlogger of the Day' description='Where team matters than individual'/>
          <Card title='Face Painting' description='Where team matters than individual'/>
          <Card title='Poster/Logo Design' description='Where team matters than individual'/>
        </div>
      </div>
    </div>
  )
}

export default OnlineEvents