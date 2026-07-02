import React from "react";
import ServiceBg from "../../assets/AboutImg.jpg";
import PageHero from "../../Components/PageHero";

const ServiceHero = () => {
  return (
    <PageHero
      backgroundImage={ServiceBg}
      subtitle="Our Services"
      title="Freight Solutions"
      highlight="Built Around You."
      description="From full truckload transportation to dedicated fleet solutions, Toronto Coast Trucking delivers dependable logistics services that keep your supply chain moving."
      currentPage="Services"
    />
  );
};

export default ServiceHero;
