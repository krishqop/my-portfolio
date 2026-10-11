import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
} from "@mui/material";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DescriptionIcon from "@mui/icons-material/Description";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MovieIcon from "@mui/icons-material/Movie";
import FlightIcon from "@mui/icons-material/Flight";

function Projects() {
  const projects = [
    {
      title: "ATS Resume Checker",
      description:
        "A web application that helps users check their resumes and understand ATS requirements.",
      icon: <DescriptionIcon sx={{ fontSize: 55 }} />,
      tech: ["Html","css", "JavaScript",],
      link: "https://ats-resume-checker-gules.vercel.app",
      color: "#00d9ff",
    },
    {
      title: "My Portfolio",
      description:
       " My personal developer portfolio built with React.js and Material UI,showcasing my skills, projects, and learning journey in frontend development and MERN Stack.",
      tech: ["React.js"],
      link: "https://my-portfolio-mu-one-49.vercel.app",
      color: "#00d9ff",
    },
    {
      title: "Netflix Clone",
      description:
        "A Netflix-inspired UI project focused on layout, design, and responsive styling.",
      icon: <MovieIcon sx={{ fontSize: 55 }} />,
      tech: ["HTML", "CSS", "JavaScript"],
      link: "",
      color: "#ff4545",
    },
    {
      title: "IndiGo Website",
      description:
        "A frontend practice project inspired by the IndiGo airline website.",
      icon: <FlightIcon sx={{ fontSize: 55 }} />,
      tech: ["HTML", "CSS", "JavaScript"],
      link: "",
      color: "#4da6ff",
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        py: { xs: 8, md: 12 },
      backgroundImage: "url(./About.jpeg)",  
      }}
    >
      <Container maxWidth="lg">
        {/* HEADING */}
        <Stack
          alignItems="center"
          spacing={1.5}
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          <Typography
            sx={{
              color: "#00d9ff",
              letterSpacing: 5,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            MY WORK
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "2.3rem",
                sm: "3rem",
                md: "3.5rem",
              },
              textAlign: "center",
            }}
          >
            My{" "}
            <Box component="span" sx={{ color: "#00cfff" }}>
              Projects
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#b8c7e6",
              textAlign: "center",
              fontSize: { xs: 14, sm: 17 },
            }}
          >
            Here are some of my projects and work.
          </Typography>
        </Stack>

        {/* PROJECTS: 2 COLUMNS × 2 ROWS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
            },
            gap: { xs: 2.5, md: 3 },
            width: "100%",
          }}
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              sx={{
                width: "100%",
                height: { xs: 350, sm: 330, md: 290 },
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                background:
                  "linear-gradient(135deg, #0c1a35, #101a32)",
                color: "#ffffff",
                border: "1px solid #0878bd",
                borderRadius: 4,
                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "#00d9ff",
                  boxShadow: "0 0 25px #00cfff30",
                },
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 2, sm: 2.5, md: 3 },
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  "&:last-child": { pb: 3 },
                }}
              >
                {/* ICON AND DETAILS */}
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    // minWidth: 0,
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 75, sm: 85, md: 100 },
                      minWidth: { xs: 75, sm: 85, md: 100 },
                      height: { xs: 85, md: 105 },
                      borderRadius: 3,
                      border: `1px solid ${project.color}80`,
                      background: `${project.color}18`,
                      color: project.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {project.icon}
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                      minWidth: 0,
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 750,
                        fontSize: {
                          xs: 15,
                          sm: 17,
                          md: 20,
                        },
                        mb: 1.5,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#b8c7e6",
                        fontSize: { xs: 12, sm: 13, md: 14 },
                        lineHeight: 1.8,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>
                </Stack>

                {/* TECHNOLOGY CHIPS */}
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={1}
                  sx={{
                    mt: 2,
                    minHeight: 28,
                  }}
                >
                  {project.tech.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      sx={{
                        color: "#bdefff",
                        backgroundColor: "#102b60",
                        border: "1px solid #204a91",
                        fontSize: 11,
                      }}
                    />
                  ))}
                </Stack>

                {/* BUTTON */}
                <Button
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                  href={project.link || undefined}
                  target={project.link ? "_blank" : undefined}
                  rel={
                    project.link
                      ? "noopener noreferrer"
                      : undefined
                  }
                  disabled={!project.link}
                  sx={{
                    mt: "auto",
                    alignSelf: "flex-start",
                    pt: 1,
                    pb: 1,
                    px: 2.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: "bold",
                    color: "#00101a",
                    background:
                      "linear-gradient(90deg, #00e5e5, #00aaff)",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #54ffff, #39bdff)",
                    },
                  }}
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;