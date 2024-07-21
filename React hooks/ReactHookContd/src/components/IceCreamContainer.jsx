import React from 'react'
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/IceCream/iceCreamAction';

const IceCreamContainer = (props) => { // Add props as a parameter
  return (
    <div className='text-center pt-[100px]'>
      {/* This is a container used to dispatch the number of cakes */}
      <h1 className='font-bold'>Hi I am Aremu and I have {props.numOfIceCream} IceCream</h1><br/>
      <button onClick={props.buyIceCream}>Submit</button> {/* Using this button with an onClick event we can dispatch action created */}
    </div>
  )
}

// This function maps the state from the store to the component's props
const mapStateToProps = (state) => {
  return {
    // Selectors return some state info from the redux store
    numOfIceCream: state.iceCream.numOfIceCream  // Get the number of cakes from the state
  }
}

// This function maps the dispatch of actions to the component's props
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()) // Dispatch the buyIceCream action when the button is clicked
  }
}


// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer); // Correctly use connect

// the scenario below shows where by we pass only dispatchToProps and not stateToProps therefore we pass null to the it
// export default connect(null, mapDispatchToProps)(IceCreamContainer); // Correctly use connect


