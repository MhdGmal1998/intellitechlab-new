import * as React from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Toolbar,
  Link,
  Divider,
  CardMedia,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "@mui/system";
// import { Fade as Hamburger } from "hamburger-react";

const navItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    name: "Clients",
    href: "#clients",
  },
  {
    name: "Contact us",
    href: "#",
  },
];

export default function IntellitechlabNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItemsListMoblie = navItems.map((item, index) => (
    <Link
      key={item.name}
      href={item.href}
      sx={{ textDecoration: "none", color: "white" }}
    >
      <Container fixed>
        <ListItem onClick={handleDrawerToggle}>
          <ListItemButton>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
        {navItems.length - 1 != index && (
          <Divider sx={{ backgroundColor: "#edf2f4" }} />
        )}
      </Container>
    </Link>
  ));

  const navItemsList = navItems.map((item) => (
    <Link
      href={item.href}
      key={item.name}
      sx={{ color: "#fff", ml: 3, textDecoration: "none" }}
    >
      {item.name}
    </Link>
  ));

  const drawer = (
    <Box sx={{ backgroundColor: "#37517e" }}>
      <List>{navItemsListMoblie}</List>
    </Box>
  );

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#37517e",
          position: { xs: "static", md: "fixed" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "row-reverse", md: "row" },
          }}
        >
          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              color: "white",
              alignSelf: "flex-end",
            }}
          >
            <Button
              onClick={() => {
                setMobileOpen(!mobileOpen);
              }}
            >
              Click here
            </Button>
            {/* <Hamburger
              direction="left"
              size={22}
              toggled={mobileOpen}
              toggle={setMobileOpen}
            /> */}
          </IconButton>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CardMedia
                component="img"
                src="/logo.png"
                sx={{
                  height: 40,
                  width: 40,
                }}
              />
              <Typography
                variant="overline"
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                Intellitectlab
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItemsList}
          </Box>
        </Toolbar>
      </AppBar>
      {mobileOpen && (
        <Box component="nav" sx={{ display: { xs: "block", md: "none" } }}>
          {drawer}
        </Box>
      )}
    </>
  );
}
