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
        <section className="containerP">
          <h3>Bem vindos a melhor barbearia da Zona Norte</h3>
          <h1>Cortes a partir <br /> de <br />R$ 20,00 Reais </h1>
          <h4>Conheça nosso diversos tipos de serviço para te deixar no estilo</h4>

        </section>

         <div className='prec'>
            <h1 className='valor'>Preços e Valores</h1>
          </div>

        <section className="container-Preços">
        
          
          <div class="combos">
                <ul>
                    <li class="nameCombo">Cabelo + Barba</li>
                    <li>R$ 35,00 Reais</li>
                   
                </ul>
            </div>
          <div class="combos">
                <ul>
                    <li class="nameCombo">Cabelo + Barba</li>
                    <li>R$ 35,00 Reais</li>
                   
                </ul>
            </div>
          <div class="combos">
                <ul>
                    <li class="nameCombo">Cabelo + Barba</li>
                    <li>R$ 35,00 Reais</li>
                   
                </ul>
            </div>
        </section>

      </main>
   
    </div> 
  
  )    
}

export default HomePage