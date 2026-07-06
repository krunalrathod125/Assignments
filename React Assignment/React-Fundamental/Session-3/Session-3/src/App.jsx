import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)
  export const products = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      name: "iPhone 15 Pro",
      price: 129999,
      description: "Apple's premium smartphone with A17 Pro chip, advanced camera system, and titanium design."
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      name: "Nike Air Max",
      price: 8999,
      description: "Comfortable and stylish running shoes designed for everyday wear and sports activities."
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      name: "Sony WH-1000XM5",
      price: 29999,
      description: "Wireless noise-canceling headphones with exceptional sound quality and battery life."
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      name: "Smart Watch",
      price: 5999,
      description: "Track fitness, monitor heart rate, and receive notifications directly on your wrist."
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      name: "MacBook Air M3",
      price: 114999,
      description: "Lightweight and powerful laptop with M3 chip, perfect for work and creativity."
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1585386959984-a41552231658",
      name: "Gaming Keyboard",
      price: 3499,
      description: "RGB mechanical keyboard with customizable lighting and responsive switches."
    }
  ];

  export default products;

  return (
    <>
    
    </>
  )
}

export default App
