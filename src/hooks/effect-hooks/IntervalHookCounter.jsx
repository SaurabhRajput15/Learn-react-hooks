import React, { useEffect, useState } from 'react'

const IntervalHookCounter = () => {
   const [count, setCount] = useState(0)

   let tick = () => {
    setCount(count + 1)
   }

   useEffect(() => {
    let interval = setInterval(tick, 1000)

    return () => clearInterval(interval)
   }, [count])

  return (
    <div>
        <h3>{count}</h3>
    </div>
  )
}

export default IntervalHookCounter