import React from 'react'
import Navbar from './components/navbar/Navbar'
import ReactLenis from 'lenis/react'
import { Footer } from './components/Footer'
import Hero from './pages/home/Hero'


const App = () => {
  return (
    <div className='bg-zinc-950 overflow-x-clip text-white flex flex-col font-inter'>
      <Navbar />
      <Hero></Hero>
      <Footer />
    </div>
  )
}

export default App