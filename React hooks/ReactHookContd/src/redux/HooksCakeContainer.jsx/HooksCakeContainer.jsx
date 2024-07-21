

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../cakes/cakesActions'


const HooksCakeContainer = () => {
    //
  const numOfCakes = useSelector(state => state.cake.numOfCakes)

  //
  const dispatch = useDispatch()
  return ( 
    <div className='text-center pt-[20px]'>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
