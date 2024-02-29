import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import ButtonBusiness from "../Texts/ButtonBusiness";

function ModelsCard({ maintitle, backgroundImage, onPress, resource, titleresource }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box>
      <Card
        sx={{
          width: { xs: "22rem", sm: "23rem", md: "23rem", lg: "23rem" },
          height: { xs: "25rem", sm: "25rem", md: "28rem", lg: "28rem" },
          overflow: "hidden",
          marginTop: "8%",
          cursor: "pointer",
          perspective: "1000px", 
          boxShadow:'none'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            transition: "transform 0.9s",
            transformStyle: "preserve-3d", // Preserve 3D transformations
            transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)", // Rotate on hover
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden", // Hide backface when flipping
            }}
          >
            <CardContent
              sx={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius:2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  background: "#18B0E691",
                  width: "100%",
                  height: "8rem",
                  left:0,
                  position:"absolute",
                  top:'80%'
                }}
              >
                <Typography
                  color="white"
                  sx={{
                    textAlign: "center",
                    fontSize: "25px",
                    fontWeight: "600",
                    marginTop: "4%",
                    fontFamily: "'Mont-Bold', sans-serif",
                  }}
                >
                  {maintitle}
                </Typography>
              </Box>
            </CardContent>
          </div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden", // Hide backface when flipping
              transform: "rotateY(180deg)", // Rotate to show back side
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                height:'100%',
                paddingTop: "30%",
                marginLeft: "3%",
                background: "#153A5F",
                color: "white",
                marginTop:'-4%',
                mr:'-5%',
                pl:'7%'
             
              }}
            >
              <Typography
                color="white"
                sx={{
                  fontSize: "25px",
                  fontWeight: "600",
                  fontFamily: "'Mont-Bold', sans-serif"
                }}
              >
                {resource}
              </Typography>
              <Typography color="white" sx={{ marginTop: "2%" , fontFamily: "'Mont-Regular', sans-serif"}}>
                {titleresource}
              </Typography>
              <Box sx={{ marginTop: "2%" }}>
                <ButtonBusiness
                  text="Get Started"
                  color="white"
                  paddingLeft="40px"
                  paddingRight="40px"
                  onClick={onPress}
                />
              </Box>
            </CardContent>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ModelsCard;
