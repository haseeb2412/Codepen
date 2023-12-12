import React, { useContext } from 'react'
import Editor from './Editor'
import {Box,styled} from "@mui/material"
import { DataContext } from '../Context/Dataprovider'


const Container = styled(Box)`
  display:flex;
  background-color:#060606;
  height:50vh;

  `;



const Code = () => {
  

  const {html ,sethtml,css,setcss,js,setjs} = useContext(DataContext);
  return (
    <Container>
      <Editor
      heading = "HTML"
      language="xml"
      icons="/"
      color = "#ff3c41"
      value={html}
      onChange={sethtml}
      />
      <Editor
      heading="CSS"
      language="css"
      icons="*" color="#0ebeff"
      value={css}
      onChange={setcss}/>
      <Editor heading="Js" language="javascript" icons="<>" color="#fcd000"
      value={js}
      onChange={setjs}/>
    </Container>
  )
}

export default Code
