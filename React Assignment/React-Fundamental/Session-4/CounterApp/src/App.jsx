import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import LikeCounter from './Components/LikeCounter'
import Flipcart from './Components/Flipcart'
import Spotify from './Components/Spotify'
import Rating from './Components/Rating'

function App() {
  const [likes, setLikes] = useState(0)

  return (
    <>
      <div className='bg-gray-900 p-8 space-y-8 text-white text-center'>
        <div>
        <LikeCounter/>
        <Flipcart/>
        <Spotify/>
        <Rating/>
        </div>
      </div>
    </>
  )
}

export default App
