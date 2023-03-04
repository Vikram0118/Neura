import React from 'react'
import { Title, Card } from '../../Components'

const Technical = () => {
  return (
    <div className='max-w-6xl mx-auto text-2xl px-2 scroll-mt-40 '>
      <Title text=' 👨‍💻 TECHNICAL EVENTS'/>
      <div className='container mx-auto py-3'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5'>
          <Card title='Rally Coding' description='Where team matters than individual' linkTo ='/Technical/RallyCoding'/>
          <Card title='Blind Coding' description='Where team matters than individual' linkTo ='/Technical/BlindCoding'/>
          <Card title='Web Design' description='Where team matters than individual' linkTo ='/Technical/WebDesign'/>
          <Card title='Debug the Code' description='Where team matters than individual' linkTo ='/Technical/DebugCode'/>
          <Card title='Technical Quiz' description='Where team matters than individual' linkTo ='/Technical/TechnicalQuiz'/>
        </div>
      </div>
    </div>
  )
}

export default Technical