import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Home from './components/Pages/Home'
import TokenSwap from './components/TokenSwap/TokenSwap'
import TokenTransaction from './components/TokenTransaction/TokenTransaction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      {/* <TokenTransaction />
      <TokenSwap/> */}
    </>
  )
}

export default App
