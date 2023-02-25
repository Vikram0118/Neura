import React from 'react'
import { Title, Card } from '../../Components'

const Technical = () => {
  return (
    <div className='max-w-6xl mx-auto text-2xl px-2 scroll-mt-40 '>
      <Title text=' 👨‍💻 Technical Events'/>
      <div className='container mx-auto py-3'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5'>
          <Card title='Rally Coding' description='Where team matters than individual'/>
          <Card title='Forst Coding' description='Where team matters than individual'/>
          <Card title='IOT Project' description='Where team matters than individual'/>
          <Card title='Blind Coding' description='Where team matters than individual'/>
          <Card title='Web Design' description='Where team matters than individual'/>
          <Card title='Debug the Code' description='Where team matters than individual'/>
          <Card title='Technical Quiz' description='Where team matters than individual'/>
          <Card title='Learn & Do' description='Where team matters than individual'/>
        </div>
      </div>
    </div>
  )
}

export default Technical