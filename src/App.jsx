import { useEffect, useState } from 'react'
import './App.css'
import Routers from './Routers/index'
import Navbar from './UI/Navbar/Navbar'
import context from './context/context'
import bookData from './data.json'
function App() {
  const [modal, setModal] = useState(false)
  const [words, setWords] = useState([])
  const [wordsData, setWordsData] = useState([])

  // params ? bookData.map((item) => {
  //   if (item.essential1.toLowerCase() === param.toLowerCase()) {
  //       }
  //     }) : ""
  return (
    <>
      <context.Provider
        value={{ modal, setModal, words, setWords,bookData}}
      >
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
