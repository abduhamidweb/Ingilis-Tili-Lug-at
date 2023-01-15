import { useState } from 'react'
import './App.css'
import Routers from './Routers/index'
import Navbar from './UI/Navbar/Navbar'
import context from './context/context'
function App() {
  const [modal, setModal] = useState(false);
  const [words, setWords] = useState([]);
  function addWord(e) {
    setWords([...words, e])
        const newData = words.filter((item, index) => {
          return (
            index ===
            words.findIndex((obj) => {
              return item.name === obj.name
            })
          )
        })
  localStorage.setItem('words', JSON.stringify(newData))
  }
  return (
    <>
      <context.Provider value={{ modal, setModal, words, setWords, addWord }}>
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
