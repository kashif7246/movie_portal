import Drawer from "@mui/material/Drawer";
import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              TMDB
            </ListSubheader>
          }
        >
          <ListItemButton>
            {/* <ListItemIcon>
              <SendIcon />
            </ListItemIcon> */}
            <ListItemText primary="Movies" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="TV Shows" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="People" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="More" />
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};
