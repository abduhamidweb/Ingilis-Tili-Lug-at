import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import context from '../../context/context'
import Unit from '../Units/Unit'
import './style.scss'
const BookPage = () => {
  const { bookData } = useContext(context)
  const { id } = useParams()
 let dataBookUnit=  bookData.map((item) => {
    if (item.essential1.toLowerCase() === id.toLowerCase()) {
      return item.data
    }
  })
  return (
    <>
      <div className='units__wrapper '>
        <Unit data={dataBookUnit.flat()} />
      </div>
    </>
  )
}

export default BookPage
