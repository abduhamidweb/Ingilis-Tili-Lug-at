import { useState } from 'react'
import './App.css'
import Routers from './Routers/index'
import Navbar from './UI/Navbar/Navbar'
function App() {
  return (
    <>
      <Navbar />
      <section>
        <div className='box'>
          <Routers />
        </div>
      </section>
    </>
  )
}

export default App
