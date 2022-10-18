import React from 'react'

import MeditationNft from '../../../img/nfts/meditationNft.svg'
import MiniHunterNft from '../../../img/nfts/miniHunterNft.svg'
import MiniRaveTwoNft from '../../../img/nfts/miniRave02Nft.svg'

import { Container, ContainerDate, ContainerImages } from './premierStyles'

function Premier() {
  return (
    <Container>
      <ContainerDate>
        <h1>The Premier Marketplace for NFTs</h1>
        <p>
          MyNFT is the premier marketplace for item in blockchain, which are
          digital items you can truly own. Digital Items have existed for a long
          time, but never like this.
        </p>
        <button type="button">Learn more</button>
      </ContainerDate>
      <ContainerImages>
        <img src={MeditationNft} alt="image-example-nft" />
        <div>
          <img src={MiniHunterNft} alt="image-example-nft" />
          <img
            src={MiniRaveTwoNft}
            style={{ width: '200px' }}
            alt="image-example-nft"
          />
        </div>
      </ContainerImages>
    </Container>
  )
}

export default Premier
