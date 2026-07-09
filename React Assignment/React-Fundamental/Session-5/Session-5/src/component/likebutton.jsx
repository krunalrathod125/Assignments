import React, { useState } from 'react'

function LikeButton() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 className='text-3xl mt-5'>1. LikeButton Component</h1>
            <h2 className='text-2xl mt-2'>Likes: {count}</h2>

            <button onClick={() => setCount(count + 1)} className='text-2xl border-2 pl-2 pr-2 m-2'>
                Like
            </button>
        </div>

    )
}

export default LikeButton 