import React, { useEffect, useState } from 'react'

const HookCounterOne = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  useEffect(() => {
    console.log('useEffect - Updating document title')
    document.title = `you clicked me ${count} times!`
  }, [count])

  return (
    <div>
        <input 
          type='text' 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={() => setCount(count + 1)}>Counter One - {count}</button>
    </div>
  )
}

export default HookCounterOne