import React, { useState } from 'react'
import Logo from '../logo/Logo'
import Button from '../button/Button'
import { FaRegEye, FaRegEyeSlash} from 'react-icons/fa'

import './login.scss'
function Login({handleLogin, moveUp, showReset}) {

  const [showPassword, setShowPassword] = useState (false);
  const togglePassword = () =>{ setShowPassword(prev => !prev)};

  return (
    <div className="login">
      <div className="header">
        <Logo />
      </div>
      <form>
        <div className="input-group">
          <input type="text" name='login' required />
          <span>Login</span>
        </div>

        <div className="input-group">
          <input type={showPassword ? 'text' : 'password'} name='password' required />
          <div className="eyes" onClick={togglePassword}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</div>
          <span className='label'>Senha</span>
        </div>
        <div className="box-options">
          <div className="input-box">
            <input type="checkbox" name="savepassword" id="savepassword" />
            <label htmlFor="savepassword">Deseja salvar sua senha</label>
          </div>
          <div className="reset">
            <p onClick={showReset}>Esqueci Minha Senha</p>
          </div>
        </div>
        
        <div className="btn">
          <Button type='submit' onClick={handleLogin}>Entrar</Button>
        </div>
      </form>

      <div className="sign">
        <p>Ainda não possui Conta ?<span onClick={moveUp}> Criar Conta</span></p>
      </div>
    </div>
  )
}

export default Login