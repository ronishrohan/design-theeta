import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Footer } from './components/Footer'
import Hero from './pages/home/Hero'
import Work from './pages/home/Work'

const App = () => {
  return (
    <div className='bg-zinc-950 overflow-x-clip text-white flex flex-col font-inter'>
      <Navbar />
      <Hero />
      <Work />
      <Footer />
    </div>
  )
}

export default App
