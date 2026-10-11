import React from "react";
import {
Box,
Container,
Typography,
Card,
CardContent,
Stack,
Button,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
return (
<Box
id="contact"
sx={{
backgroundImage: "url(./About.jpeg)",  
minHeight: "100vh",
py: { xs: 8, md: 12 },

}}
>
<Container>
<Stack spacing={3}>

      <Typography
        sx={{
          color: "#00e5ff",
          letterSpacing: 4,
          fontWeight: 700,
        }}
      >
        CONTACT ME
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          fontWeight: 800,
        }}
      >
        Let's{" "}
        <Box component="span" sx={{ color: "#00e5ff" }}>
          Connect
        </Box>
      </Typography>

      <Box
        sx={{
          width: 80,
          height: 4,
          bgcolor: "#00e5ff",
          borderRadius: 2,
          boxShadow: "0 0 15px #00e5ff",
        }}
      />

      <Typography
        sx={{
          maxWidth: 650,
          color: "#aaa",
          lineHeight: 1.9,
          fontSize:{ 
          xs: "0.9rem",
          sm: "1rem",
          md: "1.1rem",
        }}}
      >
        I'm currently building my MERN Stack skills and looking
        forward to connecting with people, learning opportunities,
        and entry-level opportunities.
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
          mt: 4,
        }}
      >

        <Card
          sx={{
            bgcolor: "#080b14",
            color: "#fff",
            border: "1px solid #00e5ff",
            borderRadius: 4,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 0 20px #0066ff",
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <EmailIcon
              sx={{ fontSize: 45, color: "#00e5ff", mb: 2 }}
            />

            <Typography variant="h6" fontWeight={700}>
              Email
            </Typography>

            <Typography sx={{ color: "#aaa", my: 2 }}>
              05krishnaram@gmail.com
            </Typography>

            <Button
              href="mailto:05krishnaram@gmail.com"
              variant="outlined"
              sx={{
                color: "#00e5ff",
                borderColor: "#00e5ff",
                "&:hover": {
                  bgcolor: "#00e5ff",
                  color: "#000",
                },
              }}
            >
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card
          sx={{
            bgcolor: "#080b14",
            color: "#fff",
            border: "1px solid #00e5ff",
            borderRadius: 4,
            // transition: "0.3s",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 0 20px #0066ff",
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <GitHubIcon
              sx={{ fontSize: 45, color: "#00e5ff", mb: 2 }}
            />

            <Typography variant="h6" fontWeight={700}>
              GitHub
            </Typography>

            <Typography sx={{ color: "#aaa", my: 2 }}>
              github.com/krishqop
            </Typography>

            <Button
              href="https://github.com/krishqop"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                color: "#00e5ff",
                borderColor: "#00e5ff",
                "&:hover": {
                  bgcolor: "#00e5ff",
                  color: "#000",
                },
              }}
            >
              View GitHub
            </Button>
          </CardContent>
        </Card>

        <Card
          sx={{
            bgcolor: "#080b14",
            color: "#fff",
            border: "1px solid #00e5ff",
            borderRadius: 4,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 0 20px #0066ff",
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <LinkedInIcon
              sx={{ fontSize: 45, color: "#00e5ff", mb: 2 }}
            />

            <Typography variant="h6" fontWeight={700}>
              LinkedIn
            </Typography>

            <Typography sx={{ color: "#aaa", my: 2 }}>
              LinkedIn Profile
            </Typography>

            <Button
              href="https://linkedin.com/in/krishna-ram-7815a8364"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                color: "#00e5ff",
                borderColor: "#00e5ff",
                "&:hover": {
                  bgcolor: "#00e5ff",
                  color: "#000",
                },
              }}
            >
              Connect
            </Button>
          </CardContent>
        </Card>

      </Box>

      <Typography
        sx={{ color: "#777", pt: 3 }}
      >
        Let's build something amazing together!
      </Typography>

    </Stack>
  </Container>
</Box>

);
}

export default Contact;