import React from 'react'
import {NavBar, Header, Footer, Body} from './Containers'
import MainApp from './MainApp';
import { Routes,Link, Route} from 'react-router-dom';
import {RallyCoding, ForstCoding, LearnDo, BlindCoding, WebDesign, TechnicalQuiz, DebugCode} from './Events';

const App = () => {
  return (

    <div className='overflow-x-hidden'>

      <Routes>
        <Route exact path='/' element={<MainApp />}> </Route>

        {/* technical route */}
        <Route exact path= 'Technical/Rallycoding' element={<RallyCoding/>}></Route>
        <Route exact path= 'Technical/ForstCoding' element={<ForstCoding/>}></Route>
        <Route exact path= 'Technical/LearnDo' element={<LearnDo/>}></Route>
        <Route exact path= 'Technical/BlindCoding' element={<BlindCoding/>}></Route>
        <Route exact path= 'Technical/WebDesign' element={<WebDesign/>}></Route>
        <Route exact path= 'Technical/TechnicalQuiz' element={<TechnicalQuiz/>}></Route>
        <Route exact path= 'Technical/DebugCode' element={<DebugCode/>}></Route>
        
      </Routes>
      
      {/* <Footer /> */}

    </div>
  )
}

export default App