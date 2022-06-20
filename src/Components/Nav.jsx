import {
  Box,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import "@fontsource/montez";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import {useContext, useState} from "react"

import { Context } from "./Context";

export let HeaderTitle = ()=>{
  return(
    <Typography sx = {{
      color: "red",
      padding: "4px",
      fontSize: "4em",
      fontFamily: "montez",
    }}>Philoso</Typography>
  );
}

export let NavList = ({type}) => {
  return (
    <List sx={{
        display: type === "row" ? "flex" : "none",
        flexFlow: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "2em",
    }}>
      <ListItem alignItems="center">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem alignItems="center">
        <ListItemText primary="Categories" />
      </ListItem>
      <ListItem alignItems="center">
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem alignItems="center">
        <ListItemText primary="contactUs" />
      </ListItem>
      <ListItem alignItems="center">
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export let Actions = ({sx}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" ,...sx}}>
      <Button sx={{width:"100%"}}>
        <ShoppingCartIcon />
      </Button>
      <Divider orientation="vertical" flexItem />
      <Button  sx={{width:"100%"}}>
        <FavoriteIcon />
      </Button>
      <Divider orientation="vertical" flexItem />
      <Button  sx={{width:"100%"}}>
        <PersonIcon />
      </Button>
      <Divider orientation="vertical" flexItem />
    </Box>
  );
};

export let AppBarDesktop = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <HeaderTitle />
      <NavList type="row" />
      <Actions />
    </Box>
  );
}


export let AppBarMobile = () => {
  let [open, setOpen] = useContext(Context)
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <MenuIcon onClick={()=>setOpen(true)}/>
      <HeaderTitle />
      <SearchIcon />
      <Box sx={{
        position: "fixed",
        bottom:0,
        width:"100%",
        display:"flex",
        background:"#232",
        justifyContent:"center",
        height:"4em",
        zIndex:100
      }}>
        <Actions sx={{width:"100%", justifyContent:"space-around"}}/>
      </Box>
    </Box>
  );
}
