import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  gap: 200px;
`

export const ContainerCollections = styled.div`
  width: 400px;
  height: 272px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 6px 12px 18px rgba(102, 146, 204, 0.08),
    inset 0px 0px 0.5px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  img {
    margin-right: 8px;
  }
`

export const ContainerImages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 12px;
`

export const ContainerDates = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #282329;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #9d9bb9;
  }
`
