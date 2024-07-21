

import React, { useEffect, useLayoutEffect } from 'react'

const LayoutHook = () => {


        // for showing useEffect first
        useEffect(() => {
         console.log('Message from useEffect')
        }, []);
        
        // for showing useLayout Hook
        useLayoutEffect(() => {
         console.log('Message from useLayout')
        }, [])

  return (
    <div>
      <h2>Test Message</h2>
      {Array(4000).fill('').map((item, i)=> (
        <li key={i}>{Math.pow(Math.random(), 10)}</li>
      ))}
    </div>
  )
}

export default LayoutHook
