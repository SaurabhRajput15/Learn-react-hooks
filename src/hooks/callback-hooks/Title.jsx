import React from 'react'

const Title = () => {
    console.log('rendering title')
  return (
    <div>
        <h3>UseEffect Component</h3>
    </div>
  )
}

export default React.memo(Title)