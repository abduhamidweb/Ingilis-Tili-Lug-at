import React, { useContext, useState } from 'react'
import './style.css'
import Input from '../Input/Input'
import context from '../../context/context'
const Submit = () => {
  const {addWord} = useContext(context)
  const [engWord, setEngWord] = useState('')
  const [engTrans, setEngTrans] = useState('')
  const [engText, setEngText] = useState('')
  function handlersSubmit(e) {
    e.preventDefault()
    let stateValue = {
      name: engWord,
      translate: engTrans,
      remember: engText,
    }
    addWord(stateValue)
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
