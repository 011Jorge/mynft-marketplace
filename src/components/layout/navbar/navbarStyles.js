import styled from 'styled-components'

export const ContainerNavbar = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;  
`

export const Logo = styled.img`
  width: 50px;
  margin-right: 50px;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`

export const ContainerLinks = styled.div`
  @media (max-width: 600px){
    display: none;
  }
`

export const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding: 50px;
  color: #bdcadb;
  text-decoration: none;
`

export const ThreePoint = styled.img`
  width: 30px;
  cursor: pointer;

  @media (max-width: 600px){
    display: none;
  }
`

export const Search = styled.img`
  width: 60px;
  cursor: pointer;

  @media (max-width: 600px){
    display: none;
  }
`

export const Button = styled.button`
  width: 210px;
  height: 60px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #bdcadb;
  border: 3px solid #bdcadb;
  border-radius: 12px;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 600px){
    display: none;
  }
`
