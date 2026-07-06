import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserGreeting from './UserGreeting'
import UserGreetingClass from './UserGreetingClass'
import MiniProfile from './MiniProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>
        <h1>Welcome to React JSX!</h1>
        <UserGreeting username="Krunal"></UserGreeting>
        <UserGreetingClass username="Krunal Rathod"></UserGreetingClass>
        <MiniProfile 
          name="Krunal Rathod"
          status= "FrontEnd Developer" />
      </div>

    
    </>
  )
}

export default App
