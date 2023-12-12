import React from 'react'
import {AppBar , Toolbar ,styled} from '@mui/material'

const Container = styled(AppBar)`
    position: static;
    border-bottom: 1px solid #2f2f2f;
    background:#060606;
    height:9vh;
    color:white;
`
const Myclass = styled(AppBar)`
    color:white;
    background:transparent;
    align-items:center;
    font-size:30px;
    font-family: 'Grand Hotel',cursive;
`

const Header = () => {
  return (
    <Container position="static">
      <Myclass>Codepen Project</Myclass>
      <Toolbar></Toolbar>
    </Container>
  )
}

export default Header
