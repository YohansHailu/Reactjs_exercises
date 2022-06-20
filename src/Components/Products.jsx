import {Grid, Stack, Button,Box, Typography} from "@mui/material";
import {products} from "../data"
import {useState} from "react"

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';

function ProductionDetail({product}){
  let {name, price, description} = product
  return (
    <Box sx={{textAlign:"center", fontStyle:"italic"}}>
      <Typography> {name} </Typography>
      <Typography component="h6"> $ {price} </Typography>
      {/* <Typography> {description} </Typography> */}
    </Box>
  );
}
function Actions({isMobile, show}){
  if(show == undefined) show = true
  return (
    <Box  sx={{display:"flex",flexFlow:isMobile?"row":"column", alignItems:"center", justifyContent:"center"}}>
      <Button>
        <FavoriteIcon/>
      </Button>
      {show && <Button>
        <ShareIcon />
      </Button>}
      {show && <Button>
        <FitScreenIcon/>
      </Button>}
    </Box>
  );
}

export function ProductsMobile(){
  return (
    <Grid container gap={4} m={3} sx={{alignItems:"center", justifyContent:"center" }}> 
      {products.map( (product) => (
          <Grid item id={product.id} xs={4} sm={4} md={2} sx={{display:"flex", gap:1, flexFlow:"column", alignItems:"center", justifyContent:"center"} }> 
            <img src={product.image} height="300px" width="100%"/>
            <ProductionDetail product={product} />
            <Actions isMobile={true}/>
            <Button variant="contained"> Add to Cart </Button>
          </Grid>
      ))}
    </Grid>
  );
}

function SingleProduct({product}){

  let [show, setShow] = useState(false)
  return(
      <Grid onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} item id={product.id} xs={2} sm={4} md={2} sx={{display:"flex", gap:1, flexFlow:"column", alignItems:"center", justifyContent:"center"} }> 
        <Stack direction="column" sx={{position:"relative", alignItems:"center"}}>


            <Box sx={{position:"relative"}}>
              <img src={product.image} height="300px" width="100%"/>
              <Box sx={{position:"absolute", top:0, right:0}}>
                <Actions show={show} isMobile={false}/>
              </Box>
            </Box>
            {show && <Button variant="contained" sx={{position:"absolute", bottom:0}}> Add to Cart </Button>}

        </Stack>
        <ProductionDetail product={product} />
      </Grid>
  );
}
export function ProductsDesktop(){
  return (
    <Grid container gap={4} m={2} sx={{alignItems:"center", justifyContent:"center" }}> 
      {products.map( (product) => (
        <SingleProduct product={product}/>
      ))}
    </Grid>
  );
}
