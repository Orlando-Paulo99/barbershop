import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    /**     {/** min-h-screen: Define a altura mínima do contêiner como a altura da tela. 
         bg-gray-100: Define o fundo do contêiner com um cinza claro.
         flex: Aplica o layout flexbox ao contêiner, permitindo uma melhor organização dos elementos filhos.

   */
    <div className="bg-white flex flex-col items-center justify-center ">
      <nav className="bg-blue-600 p-4 w-full  top-0 left-0 ">
      <h1 className="text-6xl font-black text-withe tracking-widest">
        Barbershop
      </h1>
        <ul className="flex space-x-4 list-none">
          <li><a href="#home" className="text-white font-black">Home</a></li>
          <li><a href="#about" className="text-white font-black">InFormações</a></li>
          <li><a href="#about" className="text-white font-black">Agendamento</a></li>
        </ul>
    </nav>
      {/**
       * container mx-auto: Centraliza o conteúdo e define uma largura máxima.
          p-4: Define padding.
          flex-1: Permite que o main cresça e ocupe o espaço disponível.
       */}
      <main className="bg-gray-600 p-8 mt-0 ">
      <section class="">
          <h1 className=" text-white font-black">Ambiente</h1>
          <img src="./barba-negra.webp" alt="" />

        </section>
     

      </main>
      <footer className="bg-blue-600 w-full py-4">
        <div className="container mx-auto text-center text-white">
          &copy; 2024 @minha_barbearia
        </div>h
      </footer>
    </div>
  )
}

export default HomePage