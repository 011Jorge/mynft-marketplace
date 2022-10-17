import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

import PhotoArtistOne from '../../../img/itens/photoArtist01.svg'
import PhotoArtistTwo from '../../../img/itens/photoArtist02.svg'

import {
  Container,
  ContainerImages,
  CardImage,
  ContainerDate,
  ButtonArtist,
  ButtonBuyer,
} from './listArtStyles'

function ListArt() {
  return (
    <Container>
      <ContainerImages>
        <CardImage style={{ marginTop: '50px' }}>
          <img src={PhotoArtistOne} alt="image-photo-artist-one" />
          <h2>
            Awkward Astronauts <FaCheckCircle />
          </h2>
          <h3>pinochio_2</h3>
        </CardImage>
        <CardImage>
          <img src={PhotoArtistTwo} alt="image-photo-artist-two" />
          <h2>
            Awkward Astronauts <FaCheckCircle />
          </h2>
          <h3>pinochio_2</h3>
        </CardImage>
      </ContainerImages>
      <ContainerDate>
        <h1>List your art on MyNFT</h1>
        <p>
          Are you an artist or NFT project creator? Get in touch with us to get
          your content on Nifty Gateway!
        </p>
        <div>
          <ButtonArtist>I am an artist</ButtonArtist>
          <ButtonBuyer>I am a buyer</ButtonBuyer>
        </div>
      </ContainerDate>
    </Container>
  )
}

export default ListArt
