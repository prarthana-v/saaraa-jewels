import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Account from './Pages/MyAccount'
import Register from './Pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/account/login' element={<Account />} />
          <Route path='/account/register' element={<Register />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
