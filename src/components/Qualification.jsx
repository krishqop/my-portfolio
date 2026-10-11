import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Qualification() {
  return (
    <Box
      id="qualification"
      sx={{
        backgroundImage: "url(./About.jpeg)",  
        minHeight: "100vh",
        py: { xs: 8, md: 12 },
      }}
    >
      
      <Container maxWidth="md" sx={{ position: "relative" }}>
        {/* Heading */}
        <Stack
          spacing={1}
          alignItems="center"
          sx={{ mb: 7 }}
        >
          <Typography
            sx={{
              color: "#38bdf8",
              letterSpacing: 4,
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            QUALIFICATION
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              textAlign: "center",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            My{" "}
            <Box
              component="span"
              sx={{ color: "#38bdf8" }}
            >
              Education
            </Box>
          </Typography>

          <Box
            sx={{
              width: 65,
              height: 4,
              borderRadius: 5,
              bgcolor: "#38bdf8",
              mt: 1,
            }}
          />

          <Typography
            sx={{
              color: "#9ca3af",
              textAlign: "center",
              mt: 2,
              maxWidth: 500,
              lineHeight: 1.8,
            }}
          >
            My academic journey and the foundation
            behind my passion for technology.
          </Typography>
        </Stack>

        {/* Education Layout */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "stretch",
          }}
        >
          {/* Timeline */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              alignItems: "center",
              pt: 3,
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                bgcolor: "rgba(56,189,248,0.12)",
                border: "1px solid #38bdf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#38bdf8",
              }}
            >
              <SchoolIcon />
            </Box>

            <Box
              sx={{
                  width: 2,
                  flex: 1,
                  minHeight: 100,
                  bgcolor: "rgba(56,189,248,0.35)",
                  mt: 2,
              }}
            />
          </Box>

          {/* Education Card */}
          <Card
            elevation={0}
            sx={{
              flex: 1,
              bgcolor: "rgba(17,24,39,0.75)",
              color: "#fff",
              border:
                "1px solid rgba(56,189,248,0.25)",
              borderRadius: 4,
              backdropFilter: "blur(12px)",
              transition: "all 0.35s ease",

              "&:hover": {
                transform: "translateY(-6px)",
                borderColor: "#38bdf8",
                boxShadow:
                  "0 15px 45px rgba(56,189,248,0.12)",
              },
            }}
          >
            <CardContent
              sx={{
                p: { xs: 3, md: 4 },
                "&:last-child": { pb: 4 },
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                gap={2}
                sx={{ mb: 3 }}
              >
                <Chip
                  icon={<CalendarMonthIcon />}
                  label="Graduated · 2025"
                  sx={{
                    bgcolor: "rgba(56,189,248,0.1)",
                    color: "#38bdf8",
                    fontWeight: 600,
                    border:
                      "1px solid rgba(56,189,248,0.2)",
                    "& .MuiChip-icon": {
                      color: "#38bdf8",
                    },
                  }}
                />

                <Chip
                  label="Bachelor's Degree"
                  variant="outlined"
                  sx={{
                    color: "#d1d5db",
                    borderColor: "#374151",
                  }}
                />
              </Stack>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.4,
                  mb: 2,
                  fontSize: {
                    xs: "1.3rem",
                    md: "1.7rem",
                  },
                }}
              >
                B.Sc Information Technology
              </Typography>

              <Typography
                sx={{
                  color: "#38bdf8",
                  fontWeight: 600,
                  fontSize: { xs: 14, md: 16 },
                  mb: 2,
                  lineHeight: 1.7,
                }}
              >
                Annai Vailankanni Arts and Sciences
                College
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: 1,
                  bgcolor: "#263244",
                  my: 3,  
                }}
              />

              <Typography
                sx={{
                  color: "#aeb8c8",
                  lineHeight: 1.9,
                  fontSize: 15,
                }}
              >
                Bachelor of Science in Information
                Technology. Developed a strong foundation
                in programming, web development and
                computer technologies.
              </Typography>

              {/* Skills */}
              <Stack
                direction="row"
                flexWrap="wrap"
                sx={{ mt: 3 }}
              >
                {[
                  "Programming",
                  "Web Development",
                  "IT Fundamentals",
                ].map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      color: "#dbeafe",
                      bgcolor: "#172033",
                      border: "1px solid #29364d",
                      margin: "3px"
                    }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}

export default Qualification;