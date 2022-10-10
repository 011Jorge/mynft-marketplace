import React from 'react'

import Logo from '../../../img/logo.svg'
import Search from '../../../img/search.svg'
import ThreePoint from '../../../img/threePoint.svg'

import { ContainerNavbar, ContainerLinks, Link, Button } from './navbarStyles'

function Navbar() {
  return (
    <ContainerNavbar>
      <img src={Logo} alt="icon-logo-mynft" />
      <ContainerLinks>
        <Link href="#">Home</Link>
        <Link href="#">Market Place</Link>
        <Link href="#">All NFTs</Link>
        <Link href="#">Activies</Link>
      </ContainerLinks>
      <img src={ThreePoint} alt="icon-three-point" />
      <img src={Search} alt="icon-search" />
      <Button>Connect wallet</Button>
    </ContainerNavbar>
  )
}

export default Navbar
