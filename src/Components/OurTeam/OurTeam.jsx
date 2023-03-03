import React from 'react'
import {OurTeamCard} from '../index'

const OurTeam = () => {
  return (
    <div id='ourteam' className='max-w-6xl mx-auto flex flex-col gap-4 mt-5 sm:mt-8 scroll-mt-20'>
        <div className='text-center text-xl sm:text-5xl font-semibold '>TEAM NEURA</div>
        <div className='container mx-auto py-3'>
          <div className='flex flex-col gap-3 m-2'>

            <OurTeamCard position='SECRETARY' name='BALAJI A' phone='9342378388'/>
            <OurTeamCard position='JOINT SECRETARY' name='HARINI M' phone='94876 23972'/>
            <OurTeamCard position='TREASURER' name='MADHANKUMAR V' phone='95144 75922'/>
            <OurTeamCard position='TECHNICAL COORDINATOR' name='VIKRAM P' phone='94436 15349'/>
            <OurTeamCard position='LITERARCY COORDINATOR' name='SREE VYSHNAVI C' phone='98435 08506'/>
            <OurTeamCard position='NON TECHNICAL COORDINATOR' name='ATHITHYAA R' phone='88701 71995'/>
            <OurTeamCard position='ONLINE COORDINATOR' name='VIKRAM P' phone='94436 15349'/>
          </div>
        </div>        
    </div>
  )
}

export default OurTeam