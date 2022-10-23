import React from 'react'

import Category01 from '../../../img/itens/category01.svg'
import Category02 from '../../../img/itens/category02.svg'
import Category03 from '../../../img/itens/category03.svg'
import Category04 from '../../../img/itens/category04.svg'
import Category05 from '../../../img/itens/category05.svg'
import Category06 from '../../../img/itens/category06.svg'
import Category07 from '../../../img/itens/category07.svg'
import Category08 from '../../../img/itens/category08.svg'

import { Container, H1, ContainerImages, Image } from './categoriesStyles'

function Categories() {
  return (
    <Container>
      <H1>Browse by category</H1>
      <ContainerImages>
        <Image src={Category01} alt="image-categories-one" />
        <Image src={Category02} alt="image-categories-two" />
        <Image src={Category03} alt="image-categories-three" />
        <Image src={Category04} alt="image-categories-four" />
        <Image src={Category05} alt="image-categories-five" />
        <Image src={Category06} alt="image-categories-six" />
        <Image src={Category07} alt="image-categories-seven" />
        <Image src={Category08} alt="image-categories-eight" />
      </ContainerImages>
    </Container>
  )
}

export default Categories
