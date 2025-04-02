import React, { useEffect, useState } from 'react'

const DataFetching = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const fetchData = async () => {
        let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        let json = await data.json()
        setPost(json)
        console.log(json)
    }

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        fetchData()
    }, [idFromButtonClick])
  return (
    <div>
        <input 
          type='text'
          value={id}
          onChange={e => setId(e.target.value)} 
        />
        <button onClick={handleClick} type='button'>Fetch Post</button>
        <div>{post.title}</div>
        {/* <ul>
            {posts.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul> */}
    </div>
  )
}

export default DataFetching