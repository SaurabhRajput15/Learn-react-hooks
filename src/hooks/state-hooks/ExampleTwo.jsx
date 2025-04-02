import React, { useState } from 'react'

const ExampleTwo = () => {
    const [name, setName] = useState({firstName:"", lastName:""})

    console.log(name.firstName)
    console.log(name.lastName)

  return (
    <div>
        <input 
          type='text' 
          value={name.firstName}
          onChange={e => setName({...name, firstName:e.target.value})}
        />
        <input 
          type='text' 
          value={name.lastName}
          onChange={e => setName({...name, lastName:e.target.value})}
        />
        <h3>My first name is : {name.firstName}</h3>
        <h3>My last name is : {name.lastName}</h3>
        <h3>{JSON.stringify(name)}</h3>
    </div>
  )
}

export default ExampleTwo