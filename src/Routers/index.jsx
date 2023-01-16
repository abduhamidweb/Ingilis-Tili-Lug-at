import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Submit from '../Components/Submit/Submit'
import Challenge from '../Components/Challenge/Challenge'
import Home from '../pages/Home/Home'
import BookPage from '../Components/bookPage/BookPage'

const index = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<BookPage />} />
        <Route path='/submit' element={<Submit />} />
        <Route path='/challenge' element={<Challenge />} />
      </Routes>
    </>
  )
}

export default index
