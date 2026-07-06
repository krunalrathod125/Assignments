import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import LikeCounter from './Components/LikeCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-900 p-8 space-y-8 text-white text-center'>
        <LikeCounter/>
      </div>
    </>
  )
}

export default App
