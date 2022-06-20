import { Drawer, List, ListItem, ListItemText, Box, Divider } from "@mui/material";
import { useContext } from "react";
import {Context} from "./Context";

import CloseIcon from '@mui/icons-material/Close';

export function MyDrawer(){
  let [open, setOpen] = useContext(Context)
  return(
    <Drawer open={open} >
          {open && <CloseIcon onClick={()=>setOpen(false)} sx={{position:"fixed", top:10, right:450, zIndex:1999}}/>}
          <List>
            <ListItem alignItems="center">
              <ListItemText primary="Home" />
            </ListItem>
            <Divider/>
            <ListItem alignItems="center">
              <ListItemText primary="Categories" />
            </ListItem>
            <Divider/>
            <ListItem alignItems="center">
              <ListItemText primary="Products" />
            </ListItem>
            <Divider/>
            <ListItem alignItems="center">
              <ListItemText primary="contactUs" />
            </ListItem>
          </List>
    </Drawer>
  );
}
