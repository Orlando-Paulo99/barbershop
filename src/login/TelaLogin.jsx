import React, { useState } from 'react'


function TelaLogin() {

  const [email, setEmail]=useState('')
  const [senha, setSenha]=useState('')

  return (
    <div>
        <h2>login</h2>
        <form action="">
            <div class="inserDados">
                <label htmlFor="">Email:</label>
                <input type="email" placeholder='digite seu email' />
                <label htmlFor="">Senha:</label>
                <input type="password"  placeholder='insira sua senha' />
            </div>

            <button>login</button>
            
        </form>
    </div>
  )
}

export default TelaLogin