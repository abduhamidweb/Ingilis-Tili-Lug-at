import React from 'react'
import './style.scss'
import UnitLink from '../UnitLink/UnitLink'
const Unit = ({ data }) => {
  return (
    <>
      <div className='unit__wrapper'>
        <ul className='unit__wrapper'>
          {data[0].data.map((item) => {
            return (
              <li className='unit_item' key={item.description}>
                <UnitLink unit={item.description} link={item.title} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Unit
