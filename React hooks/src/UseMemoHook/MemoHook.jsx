
import React, { useState, useMemo } from 'react'

const MemoHook = () => {

    const [number, setNumber] = useState(0);
    const [counter, setCounter]= useState(0);

    function cubeNumber(){
        console.log('Calculation done!')
        return Math.pow(number, 3)
    }

    const result = useMemo(()=> {return cubeNumber(number)}, [number]);

  return (
    <div>
      <div className="">
        <input type="text" value={number} onChange={(e)=> {setNumber(e.target.value)}} className='bg-[blue]'/>
        <h1>Cube of the number: {result}</h1>
      </div>


      <div className="">
        <button onClick={()=> {setCounter(counter + 1)}}>Counter++</button>
        <h2>Counter: {counter}</h2>
      </div>
    </div>
  )
}

export default MemoHook
