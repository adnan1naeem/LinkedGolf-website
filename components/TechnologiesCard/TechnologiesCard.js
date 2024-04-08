import { Box, Card, CardContent } from "@mui/material";
import Image from "next/image";
import React from "react";

function TechnologiesCard({ image, width }) {
  return (
    <Card
      sx={{
        width: { xs: "8rem", sm: "11rem", md: "14rem", lg: "13rem", xl: "13rem" },
        height: { xs: "6rem", sm: "9rem", md: "10rem", lg: "11rem", xl: "12rem" },
        background: "#18B0E6",
        boxShadow: "none",
        borderRadius: "6%",
      }}

    >
      <CardContent
        sx={{
          height: '100%',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={image}
          alt=""
          style={{
            width: width
          }}
        />
      </CardContent>
    </Card>
  );
}

export default TechnologiesCard;
