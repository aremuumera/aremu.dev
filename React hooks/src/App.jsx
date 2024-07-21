import { useState } from 'react'

import './App.css'
import StateHook from './useStatehook/useStateHook'
import EffectHook from './useEffectHook/EffectHook'
import RefHook from './useRefHook/RefHook'
import MemoHook from './UseMemoHook/MemoHook'
import CallBackHook from './useCallBack/callBack'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ReducerHook from './useReducerHook.jsx/ReducerHook'
import LayoutHook from './UseLayoutHook/LayoutHook'
import CustomHook from './customHook/CustomHook'
import UsingCustomHook from './customHook/UsingCustomHook'

function App() {

  

  return (
    <div>
      {/* <StateHook /> */}
      {/* <EffectHook /> */}
      {/* <RefHook /> */}
      {/* <MemoHook /> */}
      {/* <CallBackHook /> */}
      <div className='text-center pt-[200px]'>
        {/* <Profile />
        <Contact />
        <Footer /> */}
        {/* <ReducerHook /> */}
        {/* <LayoutHook /> */}
        {/* <CustomHook /> */}
        <UsingCustomHook />
      </div>
    </div>
  )
}

export default App
