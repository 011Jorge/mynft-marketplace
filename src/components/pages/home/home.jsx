import React from 'react'
import {
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from 'react-icons/fa'

import iconArrow from '../../../img/itens/arrow.svg'
import iconNft from '../../../img/itens/illustrationNft.svg'
import WhyNft from '../../../img/itens/whyNfts.svg'
import coverDownload from '../../../img/itens/coverDownload.svg'
import Logo from '../../../img/itens/logo.svg'

import TopArtists from '../../layout/artists/artists'
import Cards from '../../layout/cards/cards'
import CollectionCard from '../../layout/collections/collections'
import Navbar from '../../layout/navbar/navbar'
import SelectCurrency from '../../layout/select/select'
import Trending from '../../layout/trending/trending'
import ListArt from '../../layout/listArt/listArt'
import Categories from '../../layout/categories/categories'
import Premier from '../../layout/premier/premier'
import Benefits from '../../layout/benefits/benefits'

import {
  ContainerHome,
  ContainerIntroduction,
  H1title,
  ButtonExplore,
  ContainerItens,
  IllustrationNft,
  ContainerSessions,
  NavbarCards,
  H1Cards,
  H1,
  ContainerArtist,
  ContainerAd,
  ImageAd,
  Footer,
  FooterDescription,
  FooterItems,
} from './homeStyles'

function Home() {
  return (
    <ContainerHome>
      <Navbar />
      <ContainerIntroduction>
        <ContainerItens>
          <H1title>Discover, collect, and sell extraordinary NFTs</H1title>
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
      <ContainerSessions>
        <NavbarCards>
          <H1Cards>Hot Auctions</H1Cards>
          <SelectCurrency />
        </NavbarCards>
        <Cards />
      </ContainerSessions>
      <ContainerSessions>
        <NavbarCards>
          <H1>Popular Collections</H1>
          <SelectCurrency />
        </NavbarCards>
        <CollectionCard />
      </ContainerSessions>
      <ContainerArtist>
        <NavbarCards>
          <H1>Top artists</H1>
          <div>Music</div>
        </NavbarCards>
        <TopArtists />
      </ContainerArtist>
      <ContainerSessions>
        <NavbarCards>
          <H1>Trending NFTs</H1>
          <SelectCurrency />
        </NavbarCards>
        <Trending />
      </ContainerSessions>
      <ContainerSessions>
        <ListArt />
      </ContainerSessions>
      <ContainerSessions>
        <Categories />
      </ContainerSessions>
      <ContainerSessions>
        <Premier />
      </ContainerSessions>
      <ContainerAd>
        <ImageAd src={WhyNft} alt="myNft-ad" />
      </ContainerAd>
      <ContainerSessions>
        <Benefits />
      </ContainerSessions>
      <ContainerAd>
        <img src={coverDownload} alt="cover-download" />
      </ContainerAd>
      <Footer>
        <FooterDescription>
          <div>
            <img src={Logo} alt="img-logo-myNft" />
            <h1>MyNFT.com</h1>
          </div>
          <p>
            The world first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
        </FooterDescription>
        <FooterItems>
          <div>
            <ul>
              <li>
                <a href="#" style={{ fontWeight: 'bold' }}>
                  MarketPlace
                </a>
                <a href="#">Explore</a>
                <a href="#">How it works</a>
                <a href="#">Jobs</a>
                <a href="#">Help center</a>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="#" style={{ fontWeight: 'bold' }}>
                  Company
                </a>
                <a href="#">About us</a>
                <a href="#">Contact Us</a>
                <a href="#">Feature</a>
                <a href="#">Discover</a>
              </li>
            </ul>
          </div>
          <div className="div-contacts">
            <h1>Get our lastest updates</h1>
            <div className="div-email">
              <FaEnvelope style={{ color: '#fff' }} />
              <input type="text" placeholder="Your email" />
              <button type="button">Subscribe</button>
            </div>
            <h1>Join our comunity</h1>
            <div className="div-community">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </FooterItems>
      </Footer>
    </ContainerHome>
  )
}

export default Home
