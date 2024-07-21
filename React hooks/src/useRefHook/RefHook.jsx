
import React, { useEffect, useState, useRef } from 'react'

const RefHook = () => {

    // const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    const count = useRef(0);
    console.log(count);

    useEffect(() => {
     
    count.current = count.current + 1;
      
    },)
    
    const inputElement = useRef();

    const btnClicked = () =>{
        console.log(inputElement.current.style.background = 'blue');
    }


  return (                      
    <div>
      <div className="text-center text-2xl font-bold py-[100px]">
        <button onClick={()=> {setValue(prev => prev-1 )}} >-1</button>
         <h1>{value}</h1>
        <button onClick={()=> {setValue(prev => prev+1 )}} >+1</button>
        <h1>Render Count: {count.current}</h1>
      </div>
      <div className="" >
        <input type='text' ref={inputElement} ></input>
        <button onClick={btnClicked}>Click here </button>
      </div>
    </div>
  )
}

export default RefHook
