import React from 'react'
import Logo from '../logo/Logo'
import Button from '../button/Button'

import './resetpassword.scss'
function ForgetPassword({showLogin}) {
  return (
    <div className="forgetpassword">
      <div className="header">
        <Logo />
      </div>

      <div className="backform">
        <p>Já possui Conta? <span onClick={showLogin}>Entrar</span></p>
      </div>
      
      <form>
        <div className="input-group">
          <input type="text" name='email' required autoComplete='off' />
          <span>Email Cadastrado</span>
        </div>

        <div className="nota">
          <p>Assim que apertar em redefinir senha, Sua Senha será enviada para o email Cadastrado. <br />
          sendo aconselhavel trocar a mesma assim que que entrar em sua conta por motivos de Segurança.
          </p>
        </div>

        <div className="btn">
          <Button type='submit'>Redefinir Senha</Button>
        </div>
      </form>
    </div>
  )
}

export default ForgetPassword