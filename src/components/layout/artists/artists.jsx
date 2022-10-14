import React from 'react'

import ImgArtistEx from '../../../img/itens/iconArtistExample.svg'
import IconArtistOne from '../../../img/itens/iconArtist01.svg'
import IconArtistTwo from '../../../img/itens/iconArtist02.svg'
import IconArtistThree from '../../../img/itens/iconArtist03.svg'
import IconEth from '../../../img/itens/iconEth.svg'

import {
  Container,
  ContainerArtist,
  H1,
  ExampleArtist,
  ContainerItens,
} from './artistsStyles'

function TopArtists() {
  return (
    <Container>
      <ContainerArtist>
        <H1>1</H1>
        <ExampleArtist src={ImgArtistEx} alt="image-example-artist" />
        <div>
          <H1>Phuong Pham</H1>
          <div className="container-value">
            <img src={IconEth} alt="icon-ethereum-currency" />
            <p>2,798</p>
          </div>
        </div>
        <ContainerItens>
          <img src={IconArtistOne} alt="icon-artist" />
          <img src={IconArtistTwo} alt="icon-artist" />
          <img src={IconArtistThree} alt="icon-artist" />
          <p>Follow by mikain and</p>
          <p>2,129 users</p>
        </ContainerItens>
      </ContainerArtist>

      <ContainerArtist>
        <H1>3</H1>
        <ExampleArtist src={ImgArtistEx} alt="image-example-artist" />
        <div>
          <H1>Phuong Pham</H1>
          <div className="container-value">
            <img src={IconEth} alt="icon-ethereum-currency" />
            <p>2,798</p>
          </div>
        </div>
        <ContainerItens>
          <img src={IconArtistOne} alt="icon-artist" />
          <img src={IconArtistTwo} alt="icon-artist" />
          <img src={IconArtistThree} alt="icon-artist" />
          <p>Follow by mikain and</p>
          <p>2,129 users</p>
        </ContainerItens>
      </ContainerArtist>
      <ContainerArtist>
        <H1>5</H1>
        <ExampleArtist src={ImgArtistEx} alt="image-example-artist" />
        <div>
          <H1>Phuong Pham</H1>
          <div className="container-value">
            <img src={IconEth} alt="icon-ethereum-currency" />
            <p>2,798</p>
          </div>
        </div>
        <ContainerItens>
          <img src={IconArtistOne} alt="icon-artist" />
          <img src={IconArtistTwo} alt="icon-artist" />
          <img src={IconArtistThree} alt="icon-artist" />
          <p>Follow by mikain and</p>
          <p>2,129 users</p>
        </ContainerItens>
      </ContainerArtist>
      <ContainerArtist>
        <H1>2</H1>
        <ExampleArtist src={ImgArtistEx} alt="image-example-artist" />
        <div>
          <H1>Phuong Pham</H1>
          <div className="container-value">
            <img src={IconEth} alt="icon-ethereum-currency" />
            <p>2,798</p>
          </div>
        </div>
        <ContainerItens>
          <img src={IconArtistOne} alt="icon-artist" />
          <img src={IconArtistThree} alt="icon-artist" />
          <p>Follow by mikain and</p>
          <p>2,129 users</p>
        </ContainerItens>
      </ContainerArtist>
      <ContainerArtist>
        <H1>4</H1>
        <ExampleArtist src={ImgArtistEx} alt="image-example-artist" />
        <div>
          <H1>Phuong Pham</H1>
          <div className="container-value">
            <img src={IconEth} alt="icon-ethereum-currency" />
            <p>2,798</p>
          </div>
        </div>
        <ContainerItens>
          <img src={IconArtistTwo} alt="icon-artist" />
          <img src={IconArtistThree} alt="icon-artist" />
          <p>Follow by mikain and</p>
          <p>2,129 users</p>
        </ContainerItens>
      </ContainerArtist>
      <ContainerArtist>
        <H1>6</H1>
        <ExampleArtist src={ImgArtistEx} alt="image-example-artist" />
        <div>
          <H1>Phuong Pham</H1>
          <div className="container-value">
            <img src={IconEth} alt="icon-ethereum-currency" />
            <p>2,798</p>
          </div>
        </div>
        <ContainerItens>
          <img src={IconArtistOne} alt="icon-artist" />
          <img src={IconArtistTwo} alt="icon-artist" />
          <p>Follow by mikain and</p>
          <p>2,129 users</p>
        </ContainerItens>
      </ContainerArtist>
    </Container>
  )
}

export default TopArtists
