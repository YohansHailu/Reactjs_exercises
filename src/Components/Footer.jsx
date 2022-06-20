import { Input, Box, Grid, Typography, Button, Stack } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function AboutUs(){
  return (
    <Box sx={{color:"white"}}>  
      <Typography component="h1" sx={{lineHeight:5}}>
        ABOUT US
      </Typography>
      <Typography component="p" sx={{lineHeight:2}}>
          the study of the fundamental nature of knowledge, reality, and existence, especially when considered as an academic discipline.
      </Typography>
      <Stack direction="row">
        <Button><FacebookIcon/></Button>
        <Button><InstagramIcon/></Button>
        <Button><TwitterIcon/></Button>
      </Stack>
    </Box>
  );
}

function Information(){
  return (
    <Box sx={{color:"white"}}>  
      <Typography component="h1" sx={{lineHeight:5}}>
        ABOUT US
      </Typography>
      <Typography component="h4" sx={{lineHeight:2}}>
        AboutUs
      </Typography>
      <Typography component="h4" sx={{lineHeight:2}}>
        order Tracking
      </Typography>
      <Typography component="h4" sx={{lineHeight:2}}>
        privacy & policy
      </Typography>
      <Typography component="h4" sx={{lineHeight:2}}>
        Term & conditions
      </Typography>
    </Box>
  );
}


function MyAccount(){
  return (
    <Box sx={{color:"white"}}>  
      <Typography component="h1" sx={{lineHeight:5}}>
        My ACOUNT
      </Typography>
      <Typography component="h4" sx={{lineHeight:2}}>
        Log in
      </Typography>
      <Typography component="h4" sx={{lineHeight:2}}>
        My Cart
      </Typography>
      <Typography component="h4" sx={{lineHeight:2}}>
        My Acount
      </Typography>
      <Typography component="h4" sx={{lineHeight:2}}>
        wish list
      </Typography>
    </Box>
  );
}

function NewsLetter(){
  return (
    <Box sx={{color:"white"}}>  
      <Typography component="h1" sx={{lineHeight:5}}>
        NEWS LETTER
      </Typography>
      <Input placeholder="your email" sx={{color:"white", width:"100%"}}/>
      <Button variant="contained" sx={{width:"100%"}}> subscripbe </Button>
    </Box>
  );
}

export function Footer(){
  return(
    <Grid gap={10} p={10} container bgcolor="#210">
      <Grid item md={4}>
        <AboutUs/>
      </Grid>
      <Grid item md={4}>
        <Information/>
      </Grid>
      
      <Grid item  md={4}>
        <MyAccount/>
      </Grid>
      
      <Grid item md={4}>
        <NewsLetter/>
      </Grid>
    </Grid>
  );
}
