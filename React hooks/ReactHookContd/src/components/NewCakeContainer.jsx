import React, { useState } from 'react'
import { buyCake } from '../redux/cakes/cakesActions'
import { connect } from 'react-redux';

const NewCakeContainer = (props) => { // Add props as a parameter
// ACTION PAYLOAD
const[number, setNumber] = useState(1)



  return (
    <div className='text-center pt-[100px]'>
      {/* This is a container used to dispatch the number of cakes */}
      <h1 className='font-bold'>Hi I am Aremu and I have {props.numOfCakes} cakes</h1><br/>
      {/* here we are trying to input the number of cakes we want to buy */}
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() =>  props.buyCake(number)}>Buy {number} cakes</button> {/* Using this button with an onClick event we can dispatch action created */}
    </div>
  )
}

// This function recieve the redux state as the parameter, maps the state from the store to the component's props
const mapStateToProps = (state) => {
  return {
    // Selectors return some state info from the redux store
    numOfCakes: state.cake.numOfCakes  // Get the number of cakes from the state
  }
}
// This function maps the dispatch of actions to the component's props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)) // Dispatch the buyCake action when the button is clicked
  }
}


// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer); // Correctly use connect
