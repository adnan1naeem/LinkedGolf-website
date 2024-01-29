import React from "react";
import Button from "@mui/material/Button";

function ButtonHover({ textButton }) {
  return (
    <div className="App">
      <Button
        variant="outlined"
        sx={{
          borderRadius: "50px",
          color: "#f8f8f8",
          fontWeight: "500",
          fontSize: "15px",
          paddingTop: "6px",
          paddingBottom: "6px",
          border: "2.2px solid #18B0E6",
          textTransform: "none",
          paddingLeft: "20px",
          paddingRight: "20px",
          fontFamily:"Mont-Regula,Sans-serif",

          "&:hover": {
            backgroundColor: "#18B0E6", // Set the desired background color on hover
            transition: '0.5s',
            
          },
        }}
      >
        {textButton}
      </Button>
    </div>
  );
}

export default ButtonHover;
