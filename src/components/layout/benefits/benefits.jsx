import React from 'react'

import IconWallet from '../../../img/itens/iconWallet.svg'
import IconCollection from '../../../img/itens/iconCollection.svg'
import IconImage from '../../../img/itens/iconImage.svg'
import IconPlane from '../../../img/itens/iconPlane.svg'

import { Container, ContainerBenefits } from './benefitsStyles'

function Benefits() {
  return (
    <Container>
      <h1>Create and Sell your NFTs</h1>
      <ContainerBenefits>
        <div>
          <img src={IconWallet} alt="icon-wallet" />
          <h2>Set up your wallet</h2>
          <p>
            Choose between auctions, fixed-price listings, and declining-price
            listings. We will help to sell your NFTs! 1
          </p>
        </div>
        <div>
          <img src={IconCollection} alt="icon-collection" />
          <h2>Set up your wallet</h2>
          <p>
            Choose between auctions, fixed-price listings, and declining-price
            listings. We will help to sell your NFTs! 1
          </p>
        </div>
        <div>
          <img src={IconImage} alt="icon-image" />
          <h2>Set up your wallet</h2>
          <p>
            Choose between auctions, fixed-price listings, and declining-price
            listings. We will help to sell your NFTs! 1
          </p>
        </div>
        <div>
          <img src={IconPlane} alt="icon-plane" />
          <h2>Set up your wallet</h2>
          <p>
            Choose between auctions, fixed-price listings, and declining-price
            listings. We will help to sell your NFTs! 1
          </p>
        </div>
      </ContainerBenefits>
    </Container>
  )
}

export default Benefits
