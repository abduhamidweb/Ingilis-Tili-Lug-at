import { useState } from 'react'
import './App.css'
import Routers from './Routers/index'
import Navbar from './UI/Navbar/Navbar'
import context from './context/context'
function App() {
  const [modal, setModal] = useState(false);
  const [words, setWords] = useState([]);
  localStorage.setItem('words', JSON.stringify(words));
  return (
    <>
      <context.Provider value={{ modal, setModal, words, setWords, }}>
        <Navbar />
        <section>
          <div className='box'>
            <Routers />
          </div>
        </section>
      </context.Provider>
    </>
  )
}

export default App
