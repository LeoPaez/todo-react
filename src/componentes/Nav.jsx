import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Flex, Link } from '@chakra-ui/react'

const Nav = () => {
  return (
    <>
      <Flex bgColor={"#000"} p="20px 0" justify={"center"} gap="10px">
        <Link color={"#FFF"} as={NavLink} to="/home"
          _activeLink={{color: "grey"}}>Home</Link> 
        <Link color={"#FFF"} as={NavLink} to="/asd"
          _activeLink={{color: "grey"}}>ToDo</Link> 
        <Link color={"#FFF"} as={NavLink} to="/pokemon"
          _activeLink={{color: "grey"}}>PokeApi</Link> 
      </Flex>

      <Outlet/>
    </>
  )
}

export default Nav