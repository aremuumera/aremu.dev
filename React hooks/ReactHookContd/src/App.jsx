import { useState } from 'react'

import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './redux/HooksCakeContainer.jsx/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

function App() {


  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1><br/>
        <UserContainer />
        {/* <UserContainer />
         <CakeContainer />
         <HooksCakeContainer />
         <IceCreamContainer />
         <NewCakeContainer />
         <ItemContainer cake={true} />
         <ItemContainer cake={false} /> */}

    </div>
  )
}

export default App
