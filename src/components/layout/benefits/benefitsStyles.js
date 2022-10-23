import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    color: #21204a;
    text-align: center;


    @media (max-width: 600px) {
      font-size: 25px;
    }
  }

  @media (max-width: 600px) {
    text-align: center;
    padding-bottom: 100px;
  }

`

export const ContainerBenefits = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 60px;


  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #11315b;
    margin-top: 15px;
    margin-bottom: 15px;



  }

  p {
    width: 282px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #476285;
  }
`
