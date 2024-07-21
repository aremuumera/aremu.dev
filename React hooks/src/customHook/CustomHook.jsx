
import { useEffect, useState } from 'react'

const CustomHook = () => {

    const [name, setName] = useState(
        localStorage.getItem('username') ?
        localStorage.getItem('username') : ''
    );

    
    useEffect(() => {
      localStorage.setItem('username', name)  
    }, [name])
    
  return (
    <div>
      <input 
      type="text" 
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />    
      <h2>Hello, this is my {name}</h2>
    </div>
  )
}

export default CustomHook
