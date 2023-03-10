import React, { useContext, useState } from 'react'
import './style.css'
import Input from '../Input/Input'
import context from '../../context/context'
const Submit = () => {
  const { words, setWords } = useContext(context)
  const [engWord, setEngWord] = useState('')
  const [engTrans, setEngTrans] = useState('')
  const [engText, setEngText] = useState('')
  const [test, setTest] = useState([])

  const newData = words.filter((item, index) => {
    return (
      index ===
      words.findIndex((obj) => {
        return item.name === obj.name
      })
    )
  })
  localStorage.setItem('words', JSON.stringify(newData))
  function handlersSubmit(e) {
    e.preventDefault()
    function addWord(obj) {
      setWords([...words, obj])
    }
    let check = {
      eng1: engWord.trim().length === 0,
      eng2: engTrans.trim().length === 0,
    }
    if (!(check.eng1 || check.eng2)) {
      let stateValue = {
        name: engWord,
        translate: engTrans,
        remember: engText ? engText : 'Senga ishonama sen topasan!',
      }
      addWord(stateValue)
    }
    setEngText('')
    setEngTrans('')
    setEngWord('')
  }
  return (
    <>
      <div className='containerW'>
        <form className='form' onSubmit={handlersSubmit}>
          <h3>Enter latter</h3>
          <Input
            type={'text'}
            clas={'form-control'}
            desc={'Enter the word'}
            val={engWord}
            setValue={setEngWord}
          />
          <Input
            type={'text'}
            clas={'form-control'}
            val={engTrans}
            setValue={setEngTrans}
            desc={'Enter the translation'}
          />
          <Input
            type={'text'}
            val={engText}
            setValue={setEngText}
            clas={'form-control'}
            desc={"Eslatma so'z kiritib qo'ying"}
          />
          <button
            type=' submit'
            className='btn bg-info text-light  btn-rounded mt-3 w-100 py-3 px-3'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Submit
