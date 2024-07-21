
import React, { useState, useReducer } from 'react'

const ReducerHook = () => {
        // using useState hook
    const [value, setValue] = useState(0);


    // using useReducer hook
    const initialState = {count: 0}

// declaring reducer function first
    const reducer = (state, action) => {
       switch (action.type) {
        case "increase": {
            return {count: state.count - 1}
        }
        case "decrease": {
            return {count: state.count  +1}
        }
        case "input": {
            return {count: action.payload}
        }
        default: {
            return state
        }
       }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
                <h1>Using useStaterHook</h1>
      <div className="text-center text-2xl font-bold pb-[100px]">
        <button onClick={()=> {setValue(prev => prev-1 )}} >Decrease</button>
         <h1>{value}</h1>
        <button onClick={()=> {setValue(prev => prev+1 )}} >Increase</button>
      </div>


        

                <h1>Using ueReducerHook</h1>
      <div className="text-center text-2xl font-bold pt-[30px] pb-[100px]">
        <button onClick={()=> {dispatch({type: 'increase'})}} >Decrease</button>
         <h1>{state.count}</h1>
        <button onClick={()=> {dispatch({type: 'decrease'})}} >Increase</button>
      </div>



           <h1> still Using ueReducerHook but another example</h1>
      <div className="text-center text-2xl font-bold pt-[30px] pb-[10px]">
        <button onClick={()=> {dispatch({type: 'increase'})}} >Decrease</button>
         <h1>{state.count}</h1>
        <button onClick={()=> {dispatch({type: 'decrease'})}} >Increase</button>
      </div><br/> <br/>

      <div className="">
        <input 
        value={state.count}
        type="number" // if the type is text the payload will be string making us to remove the Number()
        onChange={(e)=>{dispatch({type: 'input', payload:Number(e.target.value)})}}
        className=' bg-[red]'
        />
      </div>



    </div>

    

  )
}

export default ReducerHook
