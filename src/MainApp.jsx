import React from 'react'
import {NavBar, Header, Footer, Body} from './Containers'
import { Routes, Route} from 'react-router-dom';

const MainApp = () => {
  return (
    <div className="bg-black sm:bg-[url('./Assets/background.svg')] sm:bg-no-repeat sm:bg-fixed sm:bg-center sm:bg-cover">
        <NavBar />
        <Header />
        <Body />    
        <Footer />
    </div>
    
    )
}

export default MainApp