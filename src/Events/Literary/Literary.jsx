import React from 'react'
import { Title, Card } from '../../Components'

const Literary = () => {
  return (
    <div className='max-w-6xl mx-auto text-2xl px-2 scroll-mt-40 '>
      <Title text='📚 Literary Events'/>
      <div className='container mx-auto py-3'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5'>
          <Card title='Spell Bee' description='Where team matters than individual' linkTo ='/Literary/SpellBee'/>
          <Card title='Pot Pourri' description='Where team matters than individual' linkTo ='/Literary/PotPourri'/>
          <Card title='Extempore' description='Where team matters than individual' linkTo ='/Literary/Extempore'/>
          <Card title='Bring Things to Life' description='Where team matters than individual' linkTo ='/Literary/BringThingsToLife'/>
        </div>
      </div>
    </div>
  )
}

export default Literary