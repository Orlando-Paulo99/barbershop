import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import TelaLogin from './login/TelaLogin'
import './login/Estilo.css'

import{BrowserRouter, Route,Routes,} from 'react-router-dom'
import HomePage from './HomePage'

function App() {
  

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<TelaLogin/>}/>
        <Route path='*' element={<h1>pagina não encontrada</h1>}/>
      </Routes>
      </BrowserRouter>

     
    
  )
}

export default App
