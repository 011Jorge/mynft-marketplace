import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const H1 = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 48px;
  color: #21204a;

  @media (max-width: 600px) {
    text-align: center;
    font-size: 30px;
  }

`

export const ContainerImages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

`

export const Image = styled.img`
  width: 190px;
`