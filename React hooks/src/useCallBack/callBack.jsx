
import React, { useState, useMemo, useCallback } from 'react'
import Header from '../components/Header';

const CallBackHook = () => {

   const [count, setCount] = useState(0);

   const newFn = useCallback(
     () => {
       
     },
     [],
   )
   

  return (
    <div>
      {/* <div className="">
        <input type="text" value={number} onChange={(e)=> {setNumber(e.target.value)}} className='bg-[blue]'/>
        <h1>Cube of the number: {result}</h1>
      </div> */}

        
      <div className="">
         <Header newFn={newFn} />
        <h2>{count}</h2>
        <button onClick={()=> {setCount(prev => prev + 1)}}>Click here</button>
      </div>
    </div>
  )
}

export default CallBackHook
