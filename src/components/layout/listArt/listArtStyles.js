import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 100px;
  gap: 200px;
`

export const ContainerImages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

export const CardImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 280px;
  height: max-content;
  background: rgba(249, 249, 249, 0.7);
  box-shadow: 20px 20px 30px rgba(124, 65, 154, 0.1);
  border-radius: 16px;

  h2 {
    margin-top: 15px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #451254;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #6e84ab;
  }
`

export const ContainerDate = styled.div`
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    color: #21204a;
  }

  p {
    width: 532px;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #64609f;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`

export const ButtonArtist = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  width: 169px;
  height: 48px;
  background: linear-gradient(256.8deg, #0698f9 13.5%, #f906f9 87.25%);
  border-radius: 12px;
  border: none;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`

export const ButtonBuyer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  width: 169px;
  height: 48px;
  background-color: transparent;
  border-radius: 12px;
  border: 2px solid #f906f9;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  cursor: pointer;
`
