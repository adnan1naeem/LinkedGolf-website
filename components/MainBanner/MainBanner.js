import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Mobile from "../../public/app-dev.svg";
import Line from "../../public/bg-pat.svg";
import ButtonBusiness from "../../components/Texts/ButtonBusiness";
import styles from "../../styles/MainBanner.module.css";
import { keyframes } from "@emotion/react";

function MainBanner() {
  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  return (
    <Box
      className={styles.container}
      sx={{
        background: "#153A5F",
        height: '65rem'
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Image
          src={Line}
          alt="no image"
          className={styles.responsive_img_Line}
        />
        <Image
          src={Mobile}
          alt="no image"
          className={styles.responsive_img_Mobile}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: { xs: 150, sm: 150, md: 150, lg: 370 },
          left: { xs: 15, sm: 50, md: 100, lg: 150 },
          width: { xs: "90%", sm: "70%", md: "50%", lg: "58%" },
          // backgroundColor: { xs: "red", sm: 'blue', md: 'green', lg: 'yellow' },
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "1.7rem", sm: "2.3rem", md: "2.8rem", lg: '2.8rem' },
            fontWeight: "bold",
            textTransform: 'uppercase',
            animation: `${fadeIn} 1s ease-in-out 5s forwards`,
          }}
        >
          WE BUILD CUSTOM SOFTWARE AND CHART-TOPPING APPS FOR DISRUPTIVE
          BUSINESSES
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
            marginTop: "10%",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <ButtonBusiness
            text="About Us"
            background="white"
            paddingLeft="45px"
            paddingRight="45px"
          />
          <ButtonBusiness
            text="Talk To Us"
            color="white"
            paddingLeft="40px"
            paddingRight="40px"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default MainBanner;
