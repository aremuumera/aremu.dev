import { useState } from 'react'
import React from 'react'

const StateHook = () => {

  const [color, setColor] = useState('red')
  


    
  const changeColor = () =>{
   setColor('blue')
  }


  const [car, setCar] = useState({
    brand: "Ferrarri",
    model:"Roma",
    year:"2024",
    color:"blue"
  })
  
  const updateColor= () => {
    setCar((prev)=>{
      return {...prev, color:"red"}
    })
  }

  const [count, setCount] = useState(0)
  
  const increaseCount = () =>{
    setCount(count + 1) // increase by 1

  }

  const [counts, setCounts] = useState(0)
  // increase by 4
  const increaseCounts = () =>{
    setCounts(prev => prev + 1) // increase by 4
    setCounts(prev => prev + 1)
    setCounts(prev => prev + 1)
    setCounts(prev => prev + 1)
    
  }
  return (
    <div>
        <div className='text-center pt-[100px]'>
      <h1 className='text-2xl font-bold'>My favorite color is {color} </h1>
      <button onClick={changeColor} > Blue</button>
    </div>

    <div className="text-center text-2xl font-bold py-[100px]">
      <h1>My {car.brand}</h1>
      <h2>It is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={updateColor}>Blue</button>
    </div>
    
     <div className="text-center text-2xl font-bold py-[100px]" >
      <h1>Count: {count}</h1>
      <button onClick={increaseCount} >Increase</button>
     </div>

     <div className="text-center text-2xl font-bold py-[100px]" >
      <h1>Count: {counts}</h1>
      <button onClick={increaseCounts} >Increase by 4</button>
     </div>
      
    </div>
  )
}

export default StateHook;
