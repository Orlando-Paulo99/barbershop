import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function HomePage() {
  return (
    <div>
      <header>
        <h1>Barbershop</h1>

        <ul>
         <a href="#">Home</a>
         <a href="#">sobre</a>
         <a href="#">Agendamentos</a>
        </ul>
      </header>
    </div> 
  
  )    
}

export default HomePage