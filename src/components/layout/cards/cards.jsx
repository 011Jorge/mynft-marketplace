import React from 'react'

import PhoneNft from '../../../img/nfts/phoneNft.svg'
import MonsterNft from '../../../img/nfts/monsterNft.svg'
import HunterNft from '../../../img/nfts/hunterNft.svg'
import ToiletNft from '../../../img/nfts/toiletNft.svg'

import { Container, Card, ImageNft } from './cardsStyles'

function Cards() {
  return (
    <Container>
      <Card>
        <ImageNft src={PhoneNft} alt="image-phone-nft" />
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
