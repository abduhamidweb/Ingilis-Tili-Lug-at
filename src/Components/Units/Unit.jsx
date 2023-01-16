import React from 'react'
import './style.scss'
import UnitLink from '../UnitLink/UnitLink'
const Unit = ({ data }) => {
  let a = [
    {
      a: 1,
    },
    {
      a: 2,
    },
    {
      a: 3,
    },
    {
      a: 4,
    },
    {
      a: 5,
    },
  ]
  return (
    <>
      <div className='unit__wrapper'>
        <ul className='unit__wrapper'>
                  {
                      data.map(item => {
                                      return (
                                        <li
                                          className='unit_item'
                                          key={item.description}
                                        >
                                          <UnitLink unit={item.description} link={item.title} />
                                        </li>
                                      )
                      })
}


        </ul>
      </div>
    </>
  )
}

export default Unit
