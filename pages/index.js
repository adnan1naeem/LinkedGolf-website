import React from "react";


import {
  HeroSection,
  FeaturesSection,
  GolfCoursesSection,
  GolfCommunitySection,
  DownloadAppSection,
  Footer,
  AboutGolferCommunitySection,
} from "../components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutGolferCommunitySection />
      <FeaturesSection />
      <GolfCoursesSection />
      <GolfCommunitySection />
      <DownloadAppSection />
      <Footer />
    </>
  );
}
