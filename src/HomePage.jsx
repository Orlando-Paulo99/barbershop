import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function HomePage() {
  return (
    <div>
      <header>
        <h1>Barbershop</h1>

        <div className="links">
        <Link to={"/sobre"}>Sobre</Link>
        <Link to={"/agenda"}>Agendamento</Link>
         
        </div>
        
      </header>

      <main>
        <section className="container-1">

        </section>

      </main>
   
    </div> 
  
  )    
}

export default HomePage