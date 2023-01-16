import React from 'react'
import './style.scss'
import Books from '../../Components/Books/Books'
import { useParams } from 'react-router-dom'
const Home = () => {

  let Book = [
    { title: 'Essential', id: 1 },
    { title: 'Essential', id: 2 },
    { title: 'Essential', id: 3 },
    { title: 'Essential', id: 4 },
    { title: 'Essential', id: 5 },
    { title: 'Essential', id: 6 },
  ]
  return (
    <>
      <div className='head__line__title'>
        <div className='units'>
          <ul className='essential'>
            {Book.map((item, key, index) => {
              return (
                <li key={item.id}>
                  <Books title={item} index={key + 1} />
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
