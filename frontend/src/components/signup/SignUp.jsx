import React, { useState } from 'react'
import Logo from '../logo/Logo'
import Button from '../button/Button'
import { FaRegEye, FaRegEyeSlash} from 'react-icons/fa'

import './signup.scss'
function SignUp({handleSignUp, showLogin}) {

  const [showPassword, setShowPassword] = useState (false);
  const togglePassword = () =>{ setShowPassword(prev => !prev)};


  return (
    <div className="register">
      <div className="header">
        <Logo />
      </div>

      <div className="backform">
        <p>Já possui Conta? <span onClick={showLogin}>Entrar</span></p>
      </div>

      <form>
        <div className="input-box">
          <div className="input-group">
            <input type="text" name='firstname' required autoComplete='off'/>
            <span>Nome</span>
          </div>

          <div className="input-group">
            <input type="text" name='lastname' required autoComplete='off'/>
            <span>Sobrenome</span>
          </div>
        </div>

        <div className="input-group">
          <input type="text" name='email' required autoComplete='off'/>
          <span>Email</span>
        </div>

        <div className="input-group">
          <input type="text" name='data' required autoComplete='off'/>
          <span>Data de Aniversário</span>
        </div>

        <div className="input-group">
          <input type="text" name='login' required autoComplete='off'/>
          <span>Login</span>
        </div>

        <div className="input-box">
          <div className="input-group">
            <input type={showPassword ? 'text' : 'password'} name='password' required/>
            <div className="eyes" onClick={togglePassword}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</div>
            <span>Senha</span>
          </div>

          <div className="input-group">
            <input type="password" name='confirmpassword' required/>
            <span>Confirmar Senha</span>
          </div>
        </div>

        <div className="btn">
          <Button type='submit' onClick={handleSignUp}>Cadastrar</Button>
        </div>
      </form>

      <div className="terms">
        <p>Ao clicar em Cadastrar, você confirma que esta de acordo com os <span>Termos de Uso.</span></p>
      </div>
    </div>
  )
}

export default SignUp