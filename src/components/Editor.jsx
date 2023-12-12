import React, { useState } from "react";
import { Box, StyledEngineProvider } from "@mui/material";
import styled from "@emotion/styled";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import '../App.css'



const Heading = styled(Box)`
    background:  #1d1e22;
    display: flex;
    padding: 9px 12px;
    

`;
const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    color: #aaaebc;
    background-color: #060606;
    font-weight:700;


`;
const Container =  styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display:flex;
    flex-direction: column;
    padding: 0 8px 8px;

`




const Editor = ({ heading, language, icons, color, value ,onChange}) => {

  const [open,setopen] =useState(true);

  const handlechange=(editor,data,value)=>{
    onChange(value);
  }



  return (
    <Container style={open ? null : {flexGrow:0 }}>
      {/* first box */}
      <Header>
        <Heading>
          <Box component="span"
          style={{
            background:color,
            height:20,
            width:20,
            display:'flex',
            placeContent:'center',
            marginRight:5,
            paddingBottom:5,
            borderRadius:5,
            color:'#000',

          }}
          >{icons}</Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
        onClick ={()=>setopen(preState=>!preState)}
        fontSize="small"
        style={{alignSelf:'center'}}
        />
      </Header>
      <ControlledEditor
       className="controlled-editor"
       value = {value}
       onBeforeChange={handlechange}
       options={{
        theme:"material",
        lineNumbers:true,
        lineWrapping: true,
        lint: true,
        mode: language,
        
       }}
      />
    </Container>
  );
};

export default Editor;
