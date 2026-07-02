import React from "react";
import ContactBg from "../../assets/AboutImg.jpg";
import PageHero from "../../Components/PageHero";

const ContactHero = () => {
  return (
    <PageHero
  backgroundImage={ContactBg}
  subtitle="Contact Us"
  title="Let's Start the"
  highlight="Conversation."
  description="Whether you need dependable freight transportation, have questions about our services, or want to discuss your logistics requirements, our team is ready to help."
  currentPage="Contact Us"
/>
  );
};

export default ContactHero;