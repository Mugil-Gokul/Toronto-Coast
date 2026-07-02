import React from "react";
import AboutBg from "../../assets/AboutImg.jpg";
import PageHero from "../../Components/PageHero";

const AboutHero = () => {
  return (
    <PageHero
  backgroundImage={AboutBg}
  subtitle="About Us"
  title="Built on Trust."
  highlight="Driven by Excellence."
  description="Toronto Coast Trucking delivers dependable transportation solutions with a commitment to safety, reliability, and exceptional customer service across every mile."
  currentPage="About Us"
/>
  );
};

export default AboutHero;