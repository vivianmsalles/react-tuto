import React, { useRef, useEffect, useState } from 'react'

const InputRef = () => {
  const inputRef = useRef(null)
  console.log(inputRef)
 
  const [value, setValue] = useState('')

  useEffect(() => {
    const eventFunction = (e) => {
      setTimeout(()=> setValue('Hello'), 2000)}

    inputRef.current.addEventListener('change', eventFunction)
    
    return(() => inputRef.current.removeEventListener('change', eventFunction))
    
  }, [])

  return(
    <input ref={inputRef} />
  )

}

export default InputRef