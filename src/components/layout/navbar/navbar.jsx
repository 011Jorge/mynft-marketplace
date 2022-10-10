import React from 'react'

import Logo from '../../../img/logo.svg'
import { ContainerNavbar } from './navbarStyles'

function Navbar() {
  return (
    <ContainerNavbar>
      <img src={Logo} alt="img-logo-mynft" />
    </ContainerNavbar>
  )
}

export default Navbar
