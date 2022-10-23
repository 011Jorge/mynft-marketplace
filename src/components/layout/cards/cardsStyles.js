import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 190px;
  margin-top: 40px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 16px;
  width: 282px;
  height: max-content;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 6px 12px 18px rgba(102, 146, 204, 0.08),
    inset 0px 0px 0.5px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #9d9bb9;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #21204a;
    flex-grow: 0;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  hr {
    width: 240px;
    border-radius: 80%;
    background: linear-gradient(256.8deg, #0698f9 13.5%, #f906f9 87.25%);
  }
`

export const ImageNft = styled.img``

export const ContainerName = styled.div`
  margin-right: 30px;
`

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`
export const ContainerDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 70px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const UserIcon = styled.img`
  padding-right: 5px;
`

export const HeartIcon = styled.img`
  padding-right: 5px;
`
