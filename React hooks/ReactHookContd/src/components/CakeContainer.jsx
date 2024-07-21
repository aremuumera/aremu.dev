import React from 'react'
import { buyCake } from '../redux/cakes/cakesActions'
import { connect } from 'react-redux';

const CakeContainer = (props) => { // Add props as a parameter
  return (
    <div className='text-center pt-[100px]'>
      {/* This is a container used to dispatch the number of cakes */}
      <h1 className='font-bold'>Hi I am Aremu and I have {props.numOfCakes} cakes</h1><br/>
      <button onClick={props.buyCake}>Submit</button> {/* Using this button with an onClick event we can dispatch action created */}
    </div>
  )
}

// This function maps the state from the store to the component's props
const mapStateToProps = (state) => {
  return {
    // Selectors return some state info from the redux store
    numOfCakes: state.cake.numOfCakes  // Get the number of cakes from the state
  }
}
// This function maps the dispatch of actions to the component's props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()) // Dispatch the buyCake action when the button is clicked
  }
}
 

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer); // Correctly use connect
