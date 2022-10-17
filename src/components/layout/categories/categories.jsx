import React from 'react'

import Category01 from '../../../img/itens/category01.svg'
import Category02 from '../../../img/itens/category02.svg'
import Category03 from '../../../img/itens/category03.svg'
import Category04 from '../../../img/itens/category04.svg'
import Category05 from '../../../img/itens/category05.svg'
import Category06 from '../../../img/itens/category06.svg'
import Category07 from '../../../img/itens/category07.svg'
import Category08 from '../../../img/itens/category08.svg'

import { Container, H1, ContainerImages } from './categoriesStyles'

function Categories() {
  return (
    <Container>
      <H1>Browse by category</H1>
      <ContainerImages>
        <img src={Category01} alt="image-categories-one" />
        <img src={Category02} alt="image-categories-two" />
        <img src={Category03} alt="image-categories-three" />
        <img src={Category04} alt="image-categories-four" />
        <img src={Category05} alt="image-categories-five" />
        <img src={Category06} alt="image-categories-six" />
        <img src={Category07} alt="image-categories-seven" />
        <img src={Category08} alt="image-categories-eight" />
      </ContainerImages>
    </Container>
  )
}

export default Categories
