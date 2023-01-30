import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { TodoContext } from "../contexto/Contexto"

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 60px;
  gap: 40px;
`

const LinkNav = styled(NavLink)`
  color: #FFF;
  text-decoration: none;
  &.active {
    color: grey;
  }
  display: flex;
  align-items: center;
`
const TodoTaskCount = styled.p`
  margin-left: 6px;
  background-color: #9d4edd;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 50%;
  color: #FFF;
`

const Nav = () => {
  const {tareas} = useContext(TodoContext)
  return (
    <>
    <NavBar>
      <LinkNav to="/home">Home</LinkNav> 
      <LinkNav to="/">ToDo <TodoTaskCount>{tareas.length}</TodoTaskCount></LinkNav> 
      <LinkNav to="/pokemon">PokeApi</LinkNav> 
    </NavBar>

      <Outlet/>
    </>
  )
}

export default Nav