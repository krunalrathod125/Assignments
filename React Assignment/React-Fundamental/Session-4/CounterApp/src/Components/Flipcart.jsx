import React, { useState } from 'react'

function Flipcart() {
      const [quantity, setQuantity] = useState(1);

  return (
    <div>
        <h1 className='text-3xl mt-5'>2. Flipkart Cart Quantity Manager</h1>

         <h2 className='text-2xl'>Laptop</h2>

      <button onClick={() => setQuantity(quantity - 1)} className='text-2xl'>
        -
      </button>

      <span className='text-2xl'> {quantity} </span>

      <button onClick={() => setQuantity(quantity + 1)} className='text-2xl'>
        +
      </button>
    </div>
  )
}

export default Flipcart