import React from 'react'
import {NavBar, Header, Footer, Body} from './Containers'
import { Routes, Route} from 'react-router-dom';

const MainApp = () => {
  return (
    <>
        <NavBar />
        <Header />
        <Body />    
        <Footer />
    </>
    
    )
}

export default MainApp