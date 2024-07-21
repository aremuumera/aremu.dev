 
import React, { useState } from 'react'
import { useEffect } from 'react';

const EffectHook = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      
    
      return () => {
        setTimeout(()=> {
            setCount(count => count + 1);
        }, 2000)
      }
    },[count])
    

  return (
    <div className="text-center text-2xl font-bold py-[100px]">
        <h1>I have rendered {count} times </h1>
    </div>
  )
}

export default EffectHook
