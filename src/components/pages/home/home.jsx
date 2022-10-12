import React from 'react'

import iconArrow from '../../../img/itens/arrow.svg'
import iconNft from '../../../img/itens/illustrationNft.svg'
import Cards from '../../layout/cards/cards'
import Navbar from '../../layout/navbar/navbar'
import SelectCurrency from '../../layout/select/select'

import {
  ContainerHome,
  ContainerIntroduction,
  H1title,
  ButtonExplore,
  ContainerItens,
  IllustrationNft,
  ContainerSessions,
  NavbarCards,
  H1Cards,
  H1,
} from './homeStyles'

function Home() {
  return (
    <ContainerHome>
      <Navbar />
      <ContainerIntroduction>
        <ContainerItens>
          <H1title>Discover, collect, and sell extraordinary NFTs</H1title>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <ButtonExplore>
            Explore now
            <div>
              <img src={iconArrow} alt="icon-arrow" />
            </div>
          </ButtonExplore>
        </ContainerItens>
        <IllustrationNft src={iconNft} alt="icon-illustration-nft" />
      </ContainerIntroduction>
      <ContainerSessions>
        <NavbarCards>
          <H1Cards>Hot Auctions</H1Cards>
          <SelectCurrency />
        </NavbarCards>
        <Cards />
      </ContainerSessions>
      <ContainerSessions>
        <NavbarCards>
          <H1>Popular Collections</H1>
          <SelectCurrency />
        </NavbarCards>
      </ContainerSessions>
    </ContainerHome>
  )
}

export default Home
