import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 60px;
  gap: 20px;
`

const LinkNav = styled(NavLink)`
  color: #FFF;
  text-decoration: none;
  &.active {
    color: grey;
  }
`

const Nav = () => {
  return (
    <>
    <NavBar>
      <LinkNav to="/home">Home</LinkNav> 
      <LinkNav to="/">ToDo</LinkNav> 
      <LinkNav to="/pokemon">PokeApi</LinkNav> 
    </NavBar>

      <Outlet/>
    </>
  )
}

export default Nav