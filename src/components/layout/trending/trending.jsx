import React from 'react'
import { FaRegClock } from 'react-icons/fa'

import TrendingNftOne from '../../../img/nfts/trendingNftOne.svg'
import TrendingNftTwo from '../../../img/nfts/trendingNftTwo.svg'
import TrendingNftThree from '../../../img/nfts/trendingNftThree.svg'
import TrendingNftFour from '../../../img/nfts/trendingNftFour.svg'

import {
  Container,
  Card,
  ImageNft,
  ContainerName,
  ContainerAbout,
} from './trendingStyles'

function Cards() {
  return (
    <Container>
      <Card>
        <ImageNft src={TrendingNftOne} alt="image-phone-nft" />
        <ContainerName>
          <p>Collection name</p>
          <h1>NFT name Ex Shiba...</h1>
        </ContainerName>
        <ContainerAbout>
          <div>
            <p>Price</p>
            <h1>1.0 ETH</h1>
            <p>$130,729.12</p>
          </div>
          <div>
            <p>Best Offer</p>
            <h1>1.5 ETH</h1>
            <p>
              <FaRegClock />
              4hrs left
            </p>
          </div>
        </ContainerAbout>
      </Card>
      <Card>
        <ImageNft src={TrendingNftTwo} alt="image-phone-nft" />
        <ContainerName>
          <p>Collection name</p>
          <h1>NFT name Ex Shiba...</h1>
        </ContainerName>
        <ContainerAbout>
          <div>
            <p>Price</p>
            <h1>1.0 ETH</h1>
            <p>$130,729.12</p>
          </div>
          <div>
            <p>Best Offer</p>
            <h1>1.5 ETH</h1>
            <p>
              <FaRegClock />
              4hrs left
            </p>
          </div>
        </ContainerAbout>
      </Card>
      <Card>
        <ImageNft src={TrendingNftThree} alt="image-phone-nft" />
        <ContainerName>
          <p>Collection name</p>
          <h1>NFT name Ex Shiba...</h1>
        </ContainerName>
        <ContainerAbout>
          <div>
            <p>Price</p>
            <h1>1.0 ETH</h1>
            <p>$130,729.12</p>
          </div>
          <div>
            <p>Best Offer</p>
            <h1>1.5 ETH</h1>
            <p>
              <FaRegClock />
              4hrs left
            </p>
          </div>
        </ContainerAbout>
      </Card>
      <Card>
        <ImageNft src={TrendingNftFour} alt="image-phone-nft" />
        <ContainerName>
          <p>Collection name</p>
          <h1>NFT name Ex Shiba...</h1>
        </ContainerName>
        <ContainerAbout>
          <div>
            <p>Price</p>
            <h1>1.0 ETH</h1>
            <p>$130,729.12</p>
          </div>
          <div>
            <p>Best Offer</p>
            <h1>1.5 ETH</h1>
            <p>
              <FaRegClock />
              4hrs left
            </p>
          </div>
        </ContainerAbout>
      </Card>
    </Container>
  )
}

export default Cards
