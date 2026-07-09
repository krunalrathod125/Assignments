import React, { useState } from 'react'

function LikeCounter() {
  const [likes,setLikes]=useState(0)
  return (
    <div >
          <h1 className='text-3xl mt-5'>1. LikeButton Component</h1>

        <h2 className='mt-2 text-2xl'>Likes: {likes}</h2>

      <button onClick={() => setLikes(likes + 1)} className='text-2xl'>
        ❤️
      </button>
    </div>
  )
}

export default LikeCounter