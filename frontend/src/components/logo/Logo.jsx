import React from 'react'
import { FaTruckMedical } from "react-icons/fa6";

import './logo.scss'
function Logo() {
  return (
    <div className="logo">
        <div className="icon">
          <FaTruckMedical className='icon-logo'/>
        </div>

        <h1>HealthCare</h1>
    </div>
  )
}

export default Logo