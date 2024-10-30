import React from 'react'
import Doctor from '../../assets/doctor.jpg'

import './banner.scss'
function Banner() {
  return (
    <div className="banner">
      <img src={Doctor} alt="Foto do Médico" />
    </div>
  )
}

export default Banner