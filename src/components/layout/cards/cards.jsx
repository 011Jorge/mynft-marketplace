import React from 'react'

import PhoneNft from '../../../img/nfts/phoneNft.svg'
import MonsterNft from '../../../img/nfts/monsterNft.svg'
import HunterNft from '../../../img/nfts/hunterNft.svg'
import ToiletNft from '../../../img/nfts/toiletNft.svg'

import {
  Container,
  Card,
  ImageNft,
  ContainerName,
  ContainerAbout,
} from './cardsStyles'

function Cards() {
  return (
    <Container>
      <Card>
        <ImageNft src={PhoneNft} alt="image-phone-nft" />
        <ContainerName>
          <p>Collection name</p>
          <h1>NFT name Ex Shiba...</h1>
        </ContainerName>
        <ContainerAbout>
          <div>
            <p>Current bid</p>
            <h1>300 ETH</h1>
            <p>$130,729.12</p>
          </div>
          <div>
            <p>Auction ending in</p>
            <h1>03:25h:05m</h1>
            <p>Bids: 25</p>
          </div>
        </ContainerAbout>
      </Card>

      <Card>
        <ImageNft src={MonsterNft} alt="image-phone-nft" />
      </Card>
      <Card>
        <ImageNft src={HunterNft} alt="image-phone-nft" />
      </Card>
      <Card>
        <ImageNft src={ToiletNft} alt="image-phone-nft" />
      </Card>
    </Container>
  )
}

export default Cards
