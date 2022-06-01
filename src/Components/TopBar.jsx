import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";

export default function TopBar(){
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container sx={{justifyContent:"space-between"}}> 
          <Grid item > 
            <IconButton size="large" edge="start" >
              <SearchIcon />
            </IconButton>
          </Grid> 

          <Grid item > 
            <IconButton size="large" edge="start">
              <PeopleIcon />
            </IconButton>

            <IconButton size="large" edge="start">
              <NotificationsIcon />
            </IconButton>

            <Badge badgeContent={4} >
              <Avatar>dh</Avatar>
            </Badge>
          </Grid> 
        </Grid> 

      </Toolbar>
    </AppBar>
  );
};
