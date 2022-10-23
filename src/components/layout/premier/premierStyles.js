import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`

export const ContainerDate = styled.div`
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    color: #21204a;

    @media (max-width: 600px) {
      text-align: center;
      font-size: 22px;
      width: 300px;
    }
  }

  p {
    width: 584px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #64609f;
    margin-top: 25px;
    margin-bottom: 25px;

    @media (max-width: 600px) {
      font-size: 14px;
      width: 300px;
      text-align: center;
    }
  }

  button {
    width: 151px;
    height: 48px;
    border: 2px solid #6692cc;
    border-radius: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #6692cc;
    cursor: pointer;

    @media (max-width: 600px) {
      width: 300px;
    }
  }
`

export const ContainerImages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }


  @media (max-width: 600px) {
    display: none;
  }
`
