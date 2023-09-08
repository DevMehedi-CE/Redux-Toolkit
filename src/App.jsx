import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashbord from './Dashbord'
import { Provider } from 'react-redux'
import store from './Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store} >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashbord' element={<Dashbord/>}  />
    </Routes>
   
    </BrowserRouter>
    </Provider>
  )
}

export default App
