

import React, { createContext } from 'react'
import PropTypes from 'prop-types';

export const AppContext = createContext();

const ContextProvider = (props) =>{

    const phone = "08050255377";
    const name = "Aremu"
    return(
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,  // Validate children prop as a node
  };

export default ContextProvider
