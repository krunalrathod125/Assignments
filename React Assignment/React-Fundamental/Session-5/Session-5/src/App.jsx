import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import LikeButton from './component/likebutton'
import Searchbar from './component/Searchbar'
import LoginForm from './component/OutputCleaner'
import PlayList from './component/PlayList'
import FormCleaner from './component/OutputCleaner'
import LoginButton from './component/loginform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-900 p-8 space-y-8 text-white text-center'>
        <LikeButton/>
        <Searchbar/>
        <LoginButton/>
        <PlayList/>
        <FormCleaner/>
      </div>
    </>
  )
}

export default App
