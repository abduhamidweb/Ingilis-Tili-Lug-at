import React,{useContext} from 'react'
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
      {/* <button class='btn btn-open'>Open Modal</button> */}
      {modal ? <Modal /> : ''}
    </>
  )
}

export default Challenge
