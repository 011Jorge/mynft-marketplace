import React from 'react'

import iconArrow from '../../../img/arrow.svg'
import iconNft from '../../../img/illustrationNft.svg'
import Navbar from '../../layout/navbar/navbar'

import {
  ContainerHome,
  ContainerIntroduction,
  H1,
  ButtonExplore,
  ContainerItens,
  IllustrationNft,
  ContainerCards,
  H1Cards,
} from './homeStyles'

function Home() {
  return (
    <ContainerHome>
      <Navbar />
      <ContainerIntroduction>
        <ContainerItens>
          <H1>Discover, collect, and sell extraordinary NFTs</H1>
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
      <ContainerCards>
        <H1Cards>Hot Auctions </H1Cards>
      </ContainerCards>
    </ContainerHome>
  )
}

export default Home
