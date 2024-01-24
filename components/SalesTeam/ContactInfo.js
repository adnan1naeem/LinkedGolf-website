import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
function ContactInfo() {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "20rem", sm: "23rem", md: "28rem", lg: "30rem" },
          height: { xs: "27rem", sm: "27rem", md: "16rem", lg: "15rem" },
          borderRadius: "5px",
          background: "#6373810F",
          boxShadow: "none",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            gap: "6%",
            marginTop: "4%",
            marginLeft: "5%",
            flexWrap: "wrap",
          }}
        >
          <img
            src="https://techtiz.co/wp-content/uploads/2023/09/pakistan.svg"
            alt=""
            width={"63px"}
          />
          <Box>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "20px",
                fontWeight: "600",
                paddingBottom: "7%",
              }}
            >
              Contact Info
            </Typography>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "15px",
              }}
            >
              Email: contact@techtiz.co
            </Typography>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "15px",
              }}
            >
              Phone: +92 326 1199244
            </Typography>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "15px",
              }}
            >
              Office address: 34, Block-Civic Center,
            </Typography>
            <Typography
              sx={{
                color: "#153A5F",
                fontSize: "15px",
              }}
            >
              Quaid - e- Azam Town / Township, Scheme, <br /> Lahore, Pakistan
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ContactInfo;
