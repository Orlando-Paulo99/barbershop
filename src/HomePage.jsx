import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function HomePage() {
  return (
    <div>
      <header>
        <h1>Barbershop</h1>

        <div class="links">
        <Link to={"/sobre"}>Sobre</Link>
        <Link to={"/agenda"}>Agendamento</Link>
         
        </div>
         
        
      </header>

   
    </div> 
  
  )    
}

export default HomePage