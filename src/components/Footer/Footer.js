import React from "react";
import { IconButton, Box, Typography, Link, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  const iconStyle = {
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    backgroundColor: "#1D1D1D66",
    margin: "0 10px",
  };

  return (
    <footer>
      <Box backgroundColor="#0D0D0D" padding={{ xs: "20px", md: "50px" }}>
        <Typography
          variant="subtitle1"
          className="text"
          style={{
            color: "#fff",
            fontFamily: "Nunito",
            textAlign: "center",
          }}
        >
          STAY UP TO DATE WITH OUR NEWS AND NOTIFICATIONS
        </Typography>

        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between" // Set to "space-between"
          alignItems="center"
          marginTop="20px"
          color="white"
          padding="10px"
          spacing={2}
        >
          <Box
            component="div"
            sx={{
              backgroundColor: "#1D1D1D66",
              color: "white",
              padding: "10px",
              borderTop: "5px solid #06F8DB",
              marginBottom: { xs: "20px", md: "0" },
              borderRadius: "5px",
            }}
          >
            <Typography
              variant="subtitle1"
              style={{
                color: "#fff",
                marginTop: "20px",
                fontFamily: "Nunito",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Any issues reach out to us
            </Typography>

            <Box
              component="div"
              sx={{
                color: "white",
                padding: "5px",
                borderTop: "#06F8DB",
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              {/* Social media icons here */}
              <IconButton style={iconStyle}>
                <InstagramIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton style={iconStyle}>
                <LinkedInIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton style={iconStyle}>
                <TwitterIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton style={iconStyle}>
                <FacebookIcon style={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>

          <Grid item md={6}>
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              {" "}
              <IconButton style={iconStyle}>
                <LocationOnIcon style={{ color: "white" }} />
              </IconButton>
              <Typography
                maxWidth={{
                  xs: "100%",
                  md: "300px",
                  marginLeft: "10px",
                  fontWeight: "400",
                  fontSize: "20px",
                }}
              >
                SVKM's Dwarkadas J. Sanghvi College of Engineering,
                Bhaktivedanta Swami Road, opp. Cooper Hospital, Navpada, JVPD
                Scheme, Vile Parle, Mumbai, Maharashtra 400056
                <br />
                <br />
                Visit us at{" "}
                <a href="https://djacm.co" style={{ color: "#06F8DB" }}>https://djacm.co/</a>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="subtitle1"
          style={{
            color: "#fff",
            marginTop: "12px",
            fontFamily: "Nunito",
            textAlign: "center",
            fontSize: "12px",
          }}
        >
          Copyright © Lines of Code 6.0 | All rights reserved
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
