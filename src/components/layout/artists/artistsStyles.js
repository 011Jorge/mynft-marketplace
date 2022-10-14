import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 40px;
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
`

export const ContainerArtist = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 520px;
  height: 130px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 6px 12px 18px rgba(102, 146, 204, 0.08),
    inset 0px 0px 0.5px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #9291a1;
  }

  .container-value {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding-top: 10px;
  }
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #451254;
`

export const ExampleArtist = styled.img`
  margin-top: 20px;
`

export const ContainerItens = styled.div`
  text-align: right;
  padding-left: 25px;
`
