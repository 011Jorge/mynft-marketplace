import styled from 'styled-components'

export const ContainerHome = styled.div``

export const ContainerIntroduction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerItens = styled.button`
  text-align: left;
  background-color: transparent;
  border: none;

  p {
    width: 600px;
    height: 66px;
    margin-top: 25px;
    margin-bottom: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #bdcadb;

    @media (max-width: 600px) {
      text-align: center;
      font-size: 15px;
      width: 300px;
      margin-bottom: 80px;
  }
  }
`

export const H1title = styled.h1`
  width: 600px;
  height: 96px;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 48px;
  color: #f0f6ff;

  @media (max-width: 600px) {
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    width: 300px;
  }
`

export const ButtonExplore = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 4px 4px 24px;
  gap: 16px;
  width: 210px;
  height: 60px;
  border-radius: 12px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  background: linear-gradient(256.8deg, #0698f9 13.5%, #f906f9 87.25%);

  @media (max-width: 600px) {
    margin: 0 auto;
  }

  div {
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 10px;
    background: #fafcff;
    border-radius: 10px;
  }
`

export const IllustrationNft = styled.img`
  margin-top: 50px;
  animation: moveNFT 3s infinite ease-in-out;
  animation-direction: alternate;

  @keyframes moveNFT {
    from {
      transform: translateY(10%) rotate(5deg);
    }
  }

  @media (max-width: 600px) {
    display: block;
    width: 300px;
  }
`

export const ContainerSessions = styled.div`
  padding-left: 150px;
  background-color: #edf1ff;
  padding-top: 200px;

  @media (max-width: 600px) {
    padding-left: 10px;
    padding-top: 100px;
  }

`

export const NavbarCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    width: 110px;
    text-align: center;
    padding: 10px 16px 10px 24px;
    background: #cde2fe;
    border-radius: 12px;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #476285;
  }
`

export const H1Cards = styled.h1`
  width: 208px;
  margin-right: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  display: flex;
  align-items: center;
  background: linear-gradient(256.8deg, #0698f9 13.5%, #f906f9 87.25%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 600px) {
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
  }
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #21204a;
  margin-right: 30px;

  @media (max-width: 600px) {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
  }
`

export const ContainerArtist = styled.div`
  padding-left: 150px;
  padding-top: 200px;
  padding-bottom: 200px;
  background-color: #edf1ff;

  @media (max-width: 600px) {
    display: none;
  }
`
export const ContainerAd = styled.div`
  text-align: center;
  background-color: #edf1ff;
  padding-top: 150px;
  padding-bottom: 150px;

  @media (max-width: 600px) {
    display: none;
  }
`

export const ImageAd = styled.img``

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #1e1d43;
`

export const FooterDescription = styled.div`
  padding: 120px;


  @media (max-width: 600px) {
    padding: 1px;
  }

  p {
    width: 324px;
    height: 88px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #bdcadb;
    margin-top: 30px;

    @media (max-width: 600px) {
      margin-bottom: 110px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      color: #fafcff;
    }
    @media (max-width: 600px) {
        margin-top: 100px;
      }
  }
`

export const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 70px;

  
  @media (max-width: 600px) {
    display: none;
  }

  li {
    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 35px;
    color: #bdcadb;
    text-decoration: none;
  }

  .div-contacts {

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #f0f6ff;
    }

    .div-email {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      margin-bottom: 40px;

      padding: 12px 4px 12px 12px;
      gap: 5px;

      width: 450px;
      height: 44px;
      background: rgba(215, 214, 220, 0.2);
      border: 1px solid rgba(215, 214, 220, 0.2);
      border-radius: 12px;

      input {
        background-color: transparent;
        border: none;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #9d9bb9;
        ::placeholder {
          padding-left: 10px;
        }
      }

      button {
        width: 114px;
        height: 36px;
        background: #cde2fe;
        border-radius: 8px;
        border: none;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #282329;
        cursor: pointer;

      }
    }
    .div-community {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }

  }
`
