
import React from 'react'
import CustomHookReal from './CutomHookReal'

const UsingCustomHook = () => {

    const [name, setName] = CustomHookReal('username', '')
    const [id, setId] = CustomHookReal('userid', '')


  return (



    <div>
      <input 
      type="text" 
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />    
      <h2>Hello, this is my {name}</h2>

      <input 
      type="text" 
        placeholder='Enter your id'
        value={id}
        onChange={(e) => setId(e.target.value)}
      />    
      <h2>Hello, this is my {id}</h2>
    </div>
  )
}

export default UsingCustomHook
