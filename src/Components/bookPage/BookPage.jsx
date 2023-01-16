// import React, { useContext, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import context from '../../context/context'
// import Unit from '../Units/Unit'
// import './style.scss'
// const BookPage = () => {
//   const { bookData } = useContext(context)
//   const { id } = useParams()
//   console.log(bookData);
//   console.log(id);
//   let dataBookUnit = bookData.map((item) => {
//     if (item.essential.toLowerCase() === id.toLowerCase()) {
//       return item.data
//     }
//   }).flat()
//   return (
//     <>
//       <div className='units__wrapper '>
//         <Unit data={dataBookUnit} />
//       </div>
//     </>
//   )
// }

// export default BookPage
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import context from '../../context/context'
import Unit from '../Units/Unit'
import './style.scss'
const BookPage = () => {
  const { bookData } = useContext(context)
  const { id } = useParams()
let dataBookUnit =   bookData.map((item) => {
      if (item.essential.toLowerCase() === id.toLowerCase()) {
        return item
      }
    })
  return (
    <>
      <div className='units__wrapper '>
        <Unit data={dataBookUnit} />
      </div>
    </>
  )
}

export default BookPage
