import styled from 'styled-components'

export const ContainerHome = styled.div``

export const ContainerIntroduction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #bdcadb;
  }
`

export const H1 = styled.h1`
  width: 600px;
  height: 96px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 48px;
  color: #f0f6ff;
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
  font-family: 'Poppins';
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
`

export const ContainerCards = styled.div`
  height: 100vh;
  background-color: #edf1ff;
`

export const H1Cards = styled.h1`
  width: 208px;
  font-family: 'Poppins';
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
`
