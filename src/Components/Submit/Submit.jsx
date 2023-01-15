import React from 'react'
import './style.css'
const Submit = () => {
  return (
    <>
          <div className='container'>
      <div className='form'>
        <h3>Enter latter</h3>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the word'
          required
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
      </div>
    </>
  )
}

export default Submit
