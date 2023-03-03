import React from 'react'
import { Literary } from '..'
import { Title, Card } from '../../Components'

const Literary = () => {
  return (
    <div className='max-w-6xl mx-auto text-2xl px-2 scroll-mt-40 '>
      <Title text=' 👨‍💻 Technical Events'/>
      <div className='container mx-auto py-3'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5'>
          <Card title='Spell Bee' description='Where team matters than individual' linkTo ='/LiteraryEvents/SpellBee'/>
          <Card title='Pot Pourri' description='Where team matters than individual' linkTo ='/LiteraryEvents/PotPourri'/>
          <Card title='Extempore' description='Where team matters than individual' linkTo ='/LiteraryEvents/Extempore'/>
          <Card title='Bring Things to Life' description='Where team matters than individual' linkTo ='/LiteraryEvents/BringThingsToLife'/>
        </div>
      </div>
    </div>
  )
}

export default Literary