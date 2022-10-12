import React from 'react'

import DigitalArtNft02 from '../../../img/nfts/digitalArtNft02.svg'
import DigitalArtNft01 from '../../../img/nfts/digitalArtNft01.svg'
import RaveNft01 from '../../../img/nfts/raveNft01.svg'
import RaveNft02 from '../../../img/nfts/raveNft02.svg'
import CameraNft from '../../../img/nfts/cameraNft.svg'
import BrainNft from '../../../img/nfts/brainNft.svg'
import IconNft from '../../../img/nfts/iconNft.svg'

import { Container, ContainerCollections } from './collectionsStyles'

function CollectionCard() {
  return (
    <Container>
      <ContainerCollections>
        <div>
          <img src={DigitalArtNft02} alt="image-nft" />
        </div>
        <div>
          <img src={CameraNft} alt="image-nft" />
          <img src={BrainNft} alt="image-nft" />
          <img src={IconNft} alt="image-nft" />
        </div>
      </ContainerCollections>

      <ContainerCollections>
        <div>
          <img src={RaveNft01} alt="image-nft" />
        </div>
        <div>
          <img src={RaveNft02} alt="image-nft" />
          <img src={BrainNft} alt="image-nft" />
          <img src={IconNft} alt="image-nft" />
        </div>
      </ContainerCollections>
      <ContainerCollections>
        <div>
          <img src={DigitalArtNft01} alt="image-nft" />
        </div>
        <div>
          <img src={CameraNft} alt="image-nft" />
          <img src={BrainNft} alt="image-nft" />
          <img src={IconNft} alt="image-nft" />
        </div>
      </ContainerCollections>
    </Container>
  )
}

export default CollectionCard
