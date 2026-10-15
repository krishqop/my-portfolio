import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Box, Typography, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navigation() {
  const [menu, setMenu] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: <HomeIcon /> },
    { name: "About", path: "/about", icon: <PersonIcon /> },
    { name: "Qualification", path: "/qualification", icon: <SchoolIcon /> },
    { name: "Projects", path: "/project", icon: <CodeIcon /> },
    { name: "Contact", path: "/Contact", icon: <ContactMailIcon /> },
  ];

  return (
    <Box
      component="nav"
      sx={{
        minHeight: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 10 },
        mx: -1,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(8,12,35,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,229,255,0.2)",
        flexWrap: "wrap",
      }}
    >
      {/* LOGO */}
      <Typography
        component={Link}
        to="/"
        sx={{
          fontSize: 28,
          fontWeight: "bold",
          color: "white",
          textDecoration: "none",
          order: { xs: 2, md: 1 },
          flexGrow: { xs: 1, md: 0 },
        }}
      >
        Krishnaram.
      </Typography>

      {/* MENU ICON */}
      <IconButton
        onClick={() => setMenu(!menu)}
        sx={{
          display: { xs: "flex", md: "none" },
          color: "#38bdf8",
          order: 1,
        }}
      >
        {menu ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* NAV LINKS */}
      <Box
        sx={{
          display: { xs: menu ? "flex" : "none", md: "flex" },
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: 2.5, md: 3 },
          width: { xs: "100%", md: "auto" },
          py: { xs: menu ? 2 : 0, md: 0 },
          order: 3,
        }}
      >
        {links.map((item) => (
          <Box
            key={item.name}
            component={Link}
            to={item.path}
            onClick={() => setMenu(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "#38bdf8" },
            }}
          >
            {item.icon}
            {item.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Navigation;