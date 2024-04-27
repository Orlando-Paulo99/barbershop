import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import TelaLogin from './login/TelaLogin'
import './login/Estilo.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <TelaLogin/>
      </div>
     
    
  )
}

export default App
