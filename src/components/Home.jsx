import React from "react";
import {
Box,
Container,
Typography,
Button,
Stack,
} from "@mui/material";



function Home() {
   return (
      <Box
      sx={{
      minHeight: "87vh",
      display: "flex",
      alignItems: "center",
      backgroundImage: "url(./Home1.jpeg)",
      margin: "-8px",
      backgroundSize:"cover",
      }}
      >
      <Container>
      <Box className="home-content">

      {/* Welcome Text */}
      <Typography
        variant="body1"
        sx={{
          color: "#00e5ff",
          fontWeight: 600,
          letterSpacing: "2px",
          mb: 2,
        }}
      >
        WELCOME TO MY PORTFOLIO
      </Typography>

      {/* Main Heading */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          fontSize: {
            xs: "2.5rem",
            sm: "3.5rem",
            md: "4.5rem",
          },
          mb: 1,
        }}
      >
        Hi, I'm{" "}
        <Box
          component="span"
          sx={{
            color: "#00e5ff",
          }}
        >
          Krishnaram
        </Box>
      </Typography>

      {/* Role */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 3,
          color: "#ddd",
        }}
      >
        Aspiring MERN Stack Developer
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "700px",
          color: "#aaa",
          lineHeight: 1.8,
          fontSize: "1.05rem",
          mb: 4,
        }}
      >
        I'm a B.Sc IT graduate passionate about web development.
        I'm currently building my skills through my MERN Stack
        learning journey and creating practical projects.
      </Typography>

      {/* Buttons */}
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          component="a"
          href="https://github.com/krishqop"
          target="_blank"
          rel="noreferrer"
          sx={{
            px: 3,
            py: 1.2,
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          GitHub
        </Button>

        <Button
          variant="contained"
          component="a"
          href="https://linkedin.com/in/krishna-ram-7815a8364"
          target="_blank"
          rel="noreferrer"
          sx={{
            px: 3,
            py: 1.2,
            borderRadius: "8px",
            textTransform: "none",
            
          }}
        >
          LinkedIn
        </Button>
      </Stack>

      </Box>
      </Container>

      <Box
        sx={{
          width: { xs: "100%", md: "58%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          mt: { xs: 6, md: 0 },
        }}
      >

        {/* BLUE GLOW */}
        <Box
          sx={{
            position: "absolute",
            width: 280,
            height: 280,
            background: "#0066FF",
            filter: "blur(100px)",
            opacity: 0.5,
          }}
        />

        {/* PHOTO */}
        <Box
          component="img"
          src="/Krishna.jpeg"
          alt="Krishnaram"
          sx={{
            width: { xs: 260, md: 330 },
            height: { xs: 320, md: 400 },
            objectFit: "cover",
            borderRadius: "25px",
            border: "2px solid #00E5FF",
            position: "relative",
            zIndex: 2,
            boxShadow: " 0 0 40px rgba(0,229,255,0.35)",

            animation: "float 3s ease-in-out infinite",

            "@keyframes float": {
            "0%": {
            transform: "translateY(0px)",
            },
            "50%": {
            transform: "translateY(-15px)",
            },
            "100%": {
            transform: "translateY(0px)",
            },
            },
            "&:hover":{
              animationPlayState:"paused",
            }

          }}
        />

      </Box>
    
      
      </Box>

      
      
      );
      }

      export default Home;