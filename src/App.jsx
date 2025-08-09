import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ReactLenis from 'lenis/react'


const App = () => {
  return (
    <div className='bg-zinc-950 text-white flex flex-col font-inter'>
      <Navbar />
      <div className='h-[calc(100vh-60px)] items-center justify-center text-6xl font-instrument-serif flex flex-col'>
        WE CREATE 
        <div className='text-9xl text-dt-yellow mb-20'>BRANDS</div>
      </div>
      <div className='h-screen'></div>
    </div>
  )
}

export default App