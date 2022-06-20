import { Box, Slide, Stack, Typography } from "@mui/material";
import "@fontsource/montez";
import { useEffect, useState } from "react";

export function Promotion(){
  let messages = [
    "1 Firefox protects your privacy",
    "2 scenes while you browse",
    "3 take control of your online security"
  ]
  let [messageIndex, setMessageIndex] = useState(0)
  let [show, setShow] = useState(true)

  useEffect(()=>{
    setShow(true)
    setTimeout(()=> setShow(false),7000)
    setInterval(()=>{
      setMessageIndex(i => (i +1) % messages.length)
      setShow(true)
      setTimeout(()=> setShow(false),3000)
    }, 4000)
  })

  return (
    <Box 
      sx={{
        padding:"10px 0 10px 0",
        background:"#e3afd2",
        display:"flex",
        justifyContent:"center"
    }}>
      <Slide direction={show?"left":"right"} in={show}>
        <Typography component="h1" sx={{
          fontSize:"2em",
          fontFamily:"montez",
          color:"white"
        }}> 
          {messages[messageIndex]}
        </Typography>
      </Slide>
    </Box>
  );
}
