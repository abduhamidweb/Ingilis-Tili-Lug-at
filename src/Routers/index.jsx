import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Submit from '../Components/Submit/Submit'
import Challenge from '../Components/Challenge/Challenge'

const index = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Submit />} />
        <Route path='challenge' element={<Challenge />} />
      </Routes>
    </>
  )
}

export default index
