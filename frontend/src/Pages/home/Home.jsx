import React, { useState } from 'react'
import Login from '../../components/login/Login'
import SignUp from '../../components/signup/SignUp'
import ForgetPassword from '../../components/reset/ForgetPassword'
import Banner from '../../components/banner/Banner'

import './home.scss'
function Home() {

  const handleLogin = () =>{console.log('logou')};
  const handleSignUp = () =>{console.log('cadastrou')};
  const [moveClass, setMoveClass] = useState ('');

  const showSign = () =>{ setMoveClass('move-up')};
  const showLogin = () =>{ setMoveClass('')};
  const showReset = () =>{ setMoveClass('move-down')};


  return (
    <div className={`home ${moveClass}`}>
        <Login handleLogin={handleLogin} moveUp={showSign} showReset={showReset}/>
        <Banner />
        <SignUp handleSignUp={handleSignUp} showLogin={showLogin}/>
        <ForgetPassword showLogin={showLogin}/>
    </div>
  )
}

export default Home