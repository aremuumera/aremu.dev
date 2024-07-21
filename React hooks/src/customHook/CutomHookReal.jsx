
import React, { useEffect, useState } from 'react'

const CustomHookReal = (key, initialValue) => {


    const [name, setName] = useState(
        localStorage.getItem(key) ?
        localStorage.getItem(key) : initialValue
    );

    useEffect(() => {
      localStorage.setItem(key, name)  
    }, [name, setName])
  return [name, setName]
}

export default CustomHookReal
