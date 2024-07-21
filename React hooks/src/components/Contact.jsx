
import React, { useContext } from 'react'
import { AppContext } from '../useContextHook/ContextHook'

const Contact = () => {


    const {phone} = useContext(AppContext)
  return (
    <div className='py-[50px]'>
    <h2>Contact</h2>
    <h3>Phone: {phone}</h3>
      
    </div>
  )
}

export default Contact
