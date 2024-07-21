
import React, { useContext } from 'react'
import { AppContext } from '../useContextHook/ContextHook'

const Profile = () => {

    const {phone }= useContext(AppContext)
  return (
    <div className='py-[50px]'>
      <h2>Profile</h2>
      <h3>Contact: {phone}</h3>
    </div>
  )
}

export default Profile
