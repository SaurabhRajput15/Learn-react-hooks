import React, { useState } from 'react'

const CounterOne = () => {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementCount = () => {
     setCount(prevCount => prevCount + 1)
  }

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
  }

  const incrementByFive = () => {
    for(let i = 0; i < 5; i++){
      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
      <h3>Count - {count}</h3>
      <div>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={incrementByFive}>Inrement-5</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
      </div>
    </div>
  )
}

export default CounterOne