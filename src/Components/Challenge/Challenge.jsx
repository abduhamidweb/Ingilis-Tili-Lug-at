import React, { useContext } from 'react'
import Modal from '../Modal/Modal'
import context from '../../context/context'
const Challenge = () => {
  const { modal, setModal } = useContext(context)
  return (
    <>
      <btn
        className="btn btn-light w-100 btn-open'"
        onClick={() => {
          setModal(true)
        }}
      >
        Start
      </btn>
      {modal ? <Modal /> : ''}
    </>
  )
}

export default Challenge
