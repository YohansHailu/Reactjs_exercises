import { Box, Stack, Typography } from "@mui/material";
function Content(){
  return (
    <Stack sx={{
      maxWidth:420,
    }}>
      <Typography component="h6"> huge collections </Typography>
      <Typography component="h1" 
        sx={{
          fontSize:{sm:"1.5em", md:"1.5em", lg:"2em"},
          lineHeight:2.5 ,
      }}> 

        Zarathustra </Typography>
      <Typography> Social networks place trackers on other websites to follow what you do, see, and watch online. This allows social media. </Typography>
    </Stack>
  );
}
export function Banner({isMobile}){
  return (
    <Box bgcolor="powderblue" sx={{
      display:"flex",
      flexFlow:isMobile ? "column":"row",
      justifyContent:"center",
      alignItems: 'center',
    }}>
      <img height="106rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Faravahar.svg/1200px-Faravahar.svg.png"/>
      <Content/>
    </Box>
  );
}

