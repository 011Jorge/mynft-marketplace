import React from 'react'

import iconLogo from '../../../img/logo.svg'
import iconSearch from '../../../img/search.svg'
import iconThreePoint from '../../../img/threePoint.svg'

import {
  ContainerNavbar,
  Logo,
  ContainerLinks,
  Link,
  ThreePoint,
  Search,
  Button,
} from './navbarStyles'

function Navbar() {
  return (
    <ContainerNavbar>
      <Logo src={iconLogo} alt="icon-logo-mynft" />
      <ContainerLinks>
        <Link href="#" style={{ fontWeight: 'bolder' }}>
          Home
        </Link>
        <Link href="#">Market Place</Link>
        <Link href="#">All NFTs</Link>
        <Link href="#">Activies</Link>
      </ContainerLinks>
      <ThreePoint src={iconThreePoint} alt="icon-three-point" />
      <Search src={iconSearch} alt="icon-search" />
      <Button>Connect wallet</Button>
    </ContainerNavbar>
  )
}

export default Navbar
