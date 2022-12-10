import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const HomeTitle = styled.h1`
  color: #FFF;
  font-size: 30px;
`
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  gap: 40px;
`
const LinkButton = styled(Link)`
  color: #FFF;
  text-decoration: none;
  border-bottom: 1px solid #FFF;
  padding: 10px;
  &.active {
    color: grey;
  }
`


const Home = () => {
  return (
    <>
      <HomeTitle>Home</HomeTitle>
      <Cont>
        <LinkButton to="/">ToDo</LinkButton>
        <LinkButton to="/pokemon">PokeApi</LinkButton>
      </Cont>
    </>
  )
}

export default Home