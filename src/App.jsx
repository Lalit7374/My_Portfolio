import { useState } from 'react'
import React from 'react'
import './App.css'
import Header from './components/header'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import Expertise from './components/Expertise'
import Email from './components/Email'
function App() {
  

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <About></About>
    <Projects></Projects>
    <Expertise></Expertise>
    <Email></Email>
  
    </>
  )
}

export default App
