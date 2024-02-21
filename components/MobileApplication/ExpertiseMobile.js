import { Box, Button, Typography } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
function ExpertiseMobile({ title, des, onPress }) {
  const [isVisible, setIsVisible] = useState(false);
  const weeksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(weeksRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (weeksRef.current) {
      observer.observe(weeksRef.current);
    }

    return () => {
      if (weeksRef.current) {
        observer.unobserve(weeksRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={weeksRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "21em", sm: "28em", md: "26em", lg: "26em", xl: "26em" },
        marginTop: "30%",
      }}
    >
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "2.2em",
          fontWeight: "600",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "#153A5F",
          fontSize: "1.1em",
          fontWeight: "400",
          marginTop: "3%",
        }}
      >
        {des}
      </Typography>
      <Button
        variant="contained"
        endIcon={<IoMdArrowRoundForward />}
        onClick={onPress}s
        sx={{
          marginTop: "5%",

          padding: { xs: "3%", sm: "2%", md: "2.3%", lg: "2.3%" },
          width: { xs: "20em", sm: "18em", md: "16em", lg: "16em" },
          paddingLeft: "1%",
          paddingRight: "1%",
          borderRadius: 0,
          textTransform: "none",
          fontSize: "16px",
          fontWeight: "400",
          background: "#18B0E6",
          "&:hover": {
            backgroundColor: "#153A5F",
          },
        }}
      >
        Schedule a Meeting &nbsp; &nbsp;
      </Button>
    </Box>
  );
}

export default ExpertiseMobile;
