// pages/education.js
import { Box, Typography } from "@mui/material";
import React from "react";
import Application from "../Education/Application";
import Image from "next/image";

function Education({onPress}) {
  return (
    <Box sx={{ mt: "5%" }}>
      <Typography
        sx={{
          textAlign: "center",
          color: "#153A5F",
          fontSize: "2.2em",
          fontWeight: "700",
        }}
      >
        Education Sector
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#153A5F",
          fontSize: "1.1em",
          fontWeight: "400",
          mt: "5px",
          lineHeight: "30px",
        }}
      >
        Digital learning is the new normal. We help to create value through
        digital learning. While creating <br /> intuitive learning applications,
        we consider the needs of teachers and students
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2%",
          paddingTop: "2%",
        }}
      >
        <Application onPress={onPress} />
        <Box
          sx={{
            width: { xs: "90%", sm: "70%", md: "40%", lg: "40%", xl: "35%" },
            mt:{md:'7%',lg:'4%',xl:'1%'}
          }}
        >
          {/* Use next/image for image optimization */}
          <img
            src="https://techtiz.co/wp-content/uploads/2023/12/education-1024x864.webp"
            alt=""
            style={{ width: "90%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Education;
