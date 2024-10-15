import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../assets/gallery/helgg-logo-mint-and-cobalt.png";

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Sidemenu({ menuOpen, toggleMenuHandler }) {
  return (
    <Drawer anchor="left" open={menuOpen} onClose={toggleMenuHandler}>
      <Box
        sx={{
          width: 250,
          marginLeft: 2,
          marginTop: 4,
        }}
        role="presentation"
      >
        <List>
          <ListItem
            disablePadding
            sx={{
              marginBottom: 8,
            }}
          >
            <ListItemButton component={Link} to="/" onClick={toggleMenuHandler}>
              <img src={Logo} width={130} height={80} alt="Helgg UI logo" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/" onClick={toggleMenuHandler}>
              <ListItemText
                primary="Home"
                sx={{ fontSize: "2rem", fontWeight: "bold" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/about"
              onClick={toggleMenuHandler}
            >
              <ListItemText
                primary="About us"
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/services"
              onClick={toggleMenuHandler}
            >
              <ListItemText
                primary="Services"
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/locations" onClick={toggleMenuHandler}>
              <ListItemText
                primary="Location"
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/blog" onClick={toggleMenuHandler}>
              <ListItemText
                primary="Blog"
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/store" onClick={toggleMenuHandler}>
              <ListItemText
                primary="Ev store"
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidemenu;
