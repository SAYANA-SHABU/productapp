import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import Homepg from './components/Homepg'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
     
      <Routes>
      <Route path='/home' element={ <Homepg/>}/>
        <Route path='/prod' element={<Add/>}/>
        <Route path='*' element={<Navigate to='/home' />} /> 
      </Routes>
    </>
  )
}

export default App
