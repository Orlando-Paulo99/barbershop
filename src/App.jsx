import { useState } from 'react'

import './App.css'


import TelaLogin from './login/TelaLogin'
import './login/Estilo.css'

import{BrowserRouter, Route,Routes,} from 'react-router-dom'
import HomePage from './HomePage'
import Agendamento from './agenda/Agendamento'

function App() {
  

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<TelaLogin/>}/>
        <Route path='/agenda' element={<Agendamento/>}/>
        <Route path='*' element={<h1>pagina não encontrada</h1>}/>
      </Routes>
      </BrowserRouter>

     
    
  )
}

export default App
