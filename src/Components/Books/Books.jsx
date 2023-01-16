import React from 'react'
import { Link } from 'react-router-dom'

const Books = ({ title, index }) => {
  return (
    <>
      <Link to={`/home/essential${index}`}>
        {title.title} {index}
      </Link>
    </>
  )
}

export default Books
