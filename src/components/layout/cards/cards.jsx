import React from 'react'

import PhoneNft from '../../../img/nfts/phoneNft.svg'
import MonsterNft from '../../../img/nfts/monsterNft.svg'
import HunterNft from '../../../img/nfts/hunterNft.svg'
import ToiletNft from '../../../img/nfts/toiletNft.svg'
import User from '../../../img/itens/user.svg'
import Heart from '../../../img/itens/heart.svg'

import {
  Container,
  Card,
  ImageNft,
  ContainerName,
  ContainerAbout,
  ContainerDate,
  UserIcon,
  HeartIcon,
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
        <hr />
        <ContainerDate>
          <div>
            <UserIcon src={User} alt="icon-user" />
            <p>Artist name</p>
          </div>
          <div>
            <HeartIcon src={Heart} alt="icon-heart" />
            <p>12121</p>
          </div>
        </ContainerDate>
      </Card>

      <Card>
        <ImageNft src={MonsterNft} alt="image-phone-nft" />
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
        <hr />
        <ContainerDate>
          <div>
            <UserIcon src={User} alt="icon-user" />
            <p>Artist name</p>
          </div>
          <div>
            <HeartIcon src={Heart} alt="icon-heart" />
            <p>12121</p>
          </div>
        </ContainerDate>
      </Card>

      <Card>
        <ImageNft src={HunterNft} alt="image-phone-nft" />
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
        <hr />
        <ContainerDate>
          <div>
            <UserIcon src={User} alt="icon-user" />
            <p>Artist name</p>
          </div>
          <div>
            <HeartIcon src={Heart} alt="icon-heart" />
            <p>12121</p>
          </div>
        </ContainerDate>
      </Card>

      <Card>
        <ImageNft src={ToiletNft} alt="image-phone-nft" />
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
        <hr />
        <ContainerDate>
          <div>
            <UserIcon src={User} alt="icon-user" />
            <p>Artist name</p>
          </div>
          <div>
            <HeartIcon src={Heart} alt="icon-heart" />
            <p>12121</p>
          </div>
        </ContainerDate>
      </Card>
    </Container>
  )
}

export default Cards
