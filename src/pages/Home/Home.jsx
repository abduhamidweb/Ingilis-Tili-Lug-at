import React, { useContext } from 'react'
import './style.scss'
import Books from '../../Components/Books/Books'
import { useParams } from 'react-router-dom'
import context from '../../context/context'
const Home = () => {
  const { bookData } = useContext(context);
  let dataBookUnit = bookData.map((item) => {
      return item
  }).flat()
  
  return (
    <>
      <div className='head__line__title'>
        <div className='units'>
          <ul className='essential'>
            {dataBookUnit.map((item, arr, index) => {
              return (
                <li key={arr}>
                  <Books title={item.title} link={item.essential} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
