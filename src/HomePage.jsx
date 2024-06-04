import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    /**     {/** min-h-screen: Define a altura mínima do contêiner como a altura da tela. 
         bg-gray-100: Define o fundo do contêiner com um cinza claro.
         flex: Aplica o layout flexbox ao contêiner, permitindo uma melhor organização dos elementos filhos.

   */
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-black w-full py-4">
        <div className="container mx-auto text-center text-white text-3xl">
          <h1>Sejam bem-vindos a melhor barbearia da Zona Norte!</h1>
        </div>
      </header>

      {/**
       * container mx-auto: Centraliza o conteúdo e define uma largura máxima.
          p-4: Define padding.
          flex-1: Permite que o main cresça e ocupe o espaço disponível.
       */}
      <main className="container mx-auto p-4 flex-1">
        
      </main>
      <footer className="bg-blue-600 w-full py-4">
        <div className="container mx-auto text-center text-white">
          &copy; 2024 @minha_barbearia
        </div>
      </footer>
    </div>
  )
}

export default HomePage