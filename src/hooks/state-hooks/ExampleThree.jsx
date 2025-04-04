import React, { useState } from 'react'

const ExampleThree = () => {
  const [items, setItems] = useState([])

  const addItems = () => {
    setItems([...items, {
        id:items.length,
        value:Math.floor(Math.random() * 10) + 1
    }])
  }

  return (
    <div>
      <button onClick={addItems}>Add a Item</button>
      <ul>
        {items.map((item) => (
            <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExampleThree