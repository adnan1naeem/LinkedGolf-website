import { Box, Typography } from "@mui/material";
import React from "react";
import FooterLogoCard from "../FooterCard/FooterLogoCard";
import FooterCard from "../FooterCard/FooterCard";
import FooterReach from "../FooterCard/FooterReach";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <Box sx={{ background: "#F8F8F8", paddingTop: "3%", marginTop: "4%" }}>
      <Box
        sx={{
          display: "flex",
          gap: "2%",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingBottom: "5%",
        }}
      >
        <FooterLogoCard />
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <FooterCard
            title="Company"
            text1="About"
            href_one="/about"
            text2="Industry"
            href_two="/industries"
            text3="Case Study"
            href_three="/portfolios"
            text4="Contact Us"
            href_four="/get-started"
            text5="Privacy Policy"
            href_five="/"
          />
          <FooterCard
            title="Services"
            text1="Mobile App Development"
            href_one="/mobile-application"
            text2="Web Development"
            href_two="/website"
            text3="UI/UX Design"
            href_three="/ui-ux-design"
            text4="SQA"
            href_four="/sqa"
          />
          <FooterCard
            title="Resources"
            text1="Careers"
            href_one="/career"
            text2="Blog"
            href_two="/blogs"
          />
          <FooterReach />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "-4%",
          borderTop: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "4%",
          paddingBottom: "2.5%",
        }}
      >
        <Box>
          <Typography sx={{ color: "#153A5F", fontWeight: "100" }}>
            © 2023 Techtiz. All Rights Reserved.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          {" "}
          <FaLinkedinIn style={{ fontSize: "28px", color: "#153A5F" }} />
          <FaFacebookF style={{ fontSize: "24px", color: "#153A5F" }} />
          <AiFillInstagram style={{ fontSize: "28px", color: "#153A5F" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
