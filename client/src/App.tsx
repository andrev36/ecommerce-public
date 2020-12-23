import React, { Component } from 'react'
import { GlobalStyle, Navbar } from './components'
import { Routes } from './Routes'

class App extends Component {
 render() {
  return (
   <>
    <GlobalStyle />
    <Navbar />
    <Routes />
   </>
  )
 }
}

export default App
