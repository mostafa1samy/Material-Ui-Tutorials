import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
//import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemonIcon";

const Nav = () => {
  const [anchorEl, setanchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handle = (e) => {
    setanchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setanchorEl(null);
  };
  console.log({ anchorEl });
  return (
    <AppBar>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          {/* <CatchingPokemonIcon /> */}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PokeMon
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Cantact</Button>
          <Button color="inherit">Pricing</Button>
          <Button
            color="inherit"
            id="menu-butt"
            onClick={handle}
            aria-controls={open ? "menu-res" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            resource
          </Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Stack>
        <Menu
          id="menu-res"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{ "aria-labelledby": "menu-butt" }}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleClose}> Blog</MenuItem>
          <MenuItem onClick={handleClose}>Prodcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
