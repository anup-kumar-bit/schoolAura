import { useState } from 'react'
import './App.css'
import Navbar from './components/Navigation/Navbar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <HomePage/>
    </div>
  )
}

export default App
