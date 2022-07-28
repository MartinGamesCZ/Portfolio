import { useState } from 'react'
import { Route, Router, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import Error404 from './Pages/404/404'
import Home from './Pages/Home/Home'
import "./Components/PageContainer/PageContainer.scss"
import "./Components/Header/Header.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
