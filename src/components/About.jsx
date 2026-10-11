import React from "react";
import { Box, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

function About() {
  const aboutCards = [
    {
      icon: <CodeIcon />,
      title: "Frontend",
      description: "HTML, CSS, JavaScript, React.js",
    },
    {
      icon: <SchoolIcon />,
      title: "Currently Learning",
      description: "MERN Stack Development",
    },
    {
      icon: <RocketLaunchIcon />,
      title: "Focus",
      description: "Web Development & Practical Projects",
    },
  ];

  return (
    <Box className="about-section"
    sx={{backgroundImage: "url(./About.jpeg)",  
    }}
    >
      <Box className="about-container">

        {/* Heading */}
        <Box className="about-heading">
          <Typography variant="overline">
            GET TO KNOW ME
          </Typography>

          <Typography variant="h2">
            About <span>Me</span>
          </Typography>

          <Box className="heading-line"></Box>
        </Box>

        {/* About Content */}
        <Box className="about-intro">

          <Typography variant="h4">
            Hi, I'm <span>Krishnaram</span>
          </Typography>

          <Typography variant="body1">
            I'm a B.Sc IT graduate passionate about web development
            and building modern web applications.
          </Typography>

          <Typography variant="body1">
            I'm currently continuing my MERN Stack learning journey
            and improving my skills by creating practical projects
            using modern web technologies.
          </Typography>

        </Box>

        {/* Cards */}
        <Box className="about-cards">

          {aboutCards.map((card, index) => (
            <Box className="about-card" key={index}>

              <Box className="about-icon">
                {card.icon}
              </Box>

              <Typography variant="h6">
                {card.title}
              </Typography>

              <Typography variant="body2">
                {card.description}
              </Typography>

            </Box>
          ))}

        </Box>

      </Box>

    </Box>
  );
}

export default About;