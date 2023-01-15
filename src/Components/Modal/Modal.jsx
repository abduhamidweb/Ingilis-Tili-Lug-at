import React, { useContext } from 'react'
import './style.css'

import context from '../../context/context'
const Modal = () => {
  const { setModal } = useContext(context)
  let wordData = JSON.parse(localStorage.getItem('words'))
  console.clear()
// for (const iterator of wordData) {
//   console.log(iterator);
// }
  function* show() {
    let answer
    for (let iterator of wordData) {
      console.log(iterator.translate);
      // console.log(yield iterator.translate);
      answer = yield iterator.translate
      console.log(answer == iterator.name);
    }
    return answer
  }
  let generator = show();

  let javob = ''
  for (const key in wordData) {
    javob = prompt(generator.next("javob").value)
  }
  generator.next("javob")
  return (
    <>
      <div className='modals '>
        <div className='removeModal'>
          <i
            className='bi bi-x-circle'
            onClick={() => {
              setModal(false)
            }}
          ></i>
        </div>
        <div className='form'>
          <h3 className='h3'>Qiyoslangan so'zni o'ylang.</h3>
          <input
            type='text'
            className='form-control text-center'
            placeholder='Enter the word'
            value={'WOW'}
            disabled
          />
          <input
            type='text'
            className='form-control'
            placeholder='Enter the translation'
            required
          />
          <button
            type=' submit'
            className='btn bg-info text-light  btn-rounded mt-3 w-100 py-3 px-3'
          >
            Submit
          </button>
        </div>
        <div className='hisobot'>
          <div className='row'>
            <div className='col-6 text-center'>
              <strong>Right:</strong>
              <span className='ms-1'>0</span>
            </div>
            <div className='col-6 text-center'>
              <strong>Error:</strong>
              <span className='ms-1'>0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
