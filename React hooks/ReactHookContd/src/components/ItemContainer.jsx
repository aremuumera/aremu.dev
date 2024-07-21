
import React from 'react'
import { connect } from 'react-redux';
import { buyCake } from '../redux/cakes/cakesActions'
import { buyIceCream } from '../redux/IceCream/iceCreamAction';

const ItemContainer = (Props) => {
  return (
    <div>
      {/* // to display the number of cakes or iceCream based on the prop that is passed from the parent container*/}
      {/* so this component can be used for both cakes and iceCreams */}
      <h2>Item - {Props.item}</h2>
      <button onClick={Props.DispatchItem}>Buy Items</button> 
    </div>
  )
}


const mapStateToProps = (state, ownProps) => { // here the mapToStateProps takes 2 parameter (redux state) and the (props of the component itself(ownProps))
  // so the scenario above is explaning that  we are mapping the state to this components  with (Props) but the component also has other props that it is using within the components and you can make use of it if you want to
    // therefore we will conditionally assign the redux current state and pass in a prop = (cake) which is from the parent component and the parent component is from the app.jsx or main.jsx
const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream

return {
    item: itemState,
}
}

    const mapDispatchToProps = (dispatch, ownProps) => { 
    const itemDispatch = ownProps.cake ? 
    () => dispatch(buyCake()): 
    () => dispatch(buyIceCream())

return {
    DispatchItem: itemDispatch,
}
}
export default connect(mapStateToProps, mapDispatchToProps) (ItemContainer)
