import React from "react";
import PageHero from "../../../Components/PageHero";
import DedicatedHero from "../../../assets/AboutImg.jpg";
import DedicatedImage from "../../../assets/IMG_1249-scaled.jpg";
import ServiceDetail from "../../../Components/ServiceDetail";
import ServiceBenefits from "../../../Components/ServiceBenefits";
import GetStarted from "../../../Components/GetStarted";

const DCS = () => {
  const dedicatedBenefits = [
    {
      title: "Flatbed Hauling",
      description:
        "Ideal for oversized, heavy, or irregular freight requiring specialized equipment, secure loading, and experienced transportation professionals.",
    },
    {
      title: "Refrigerated Transport",
      description:
        "Temperature-controlled transportation solutions designed to protect perishable, frozen, and sensitive goods throughout the entire journey.",
    },
    {
      title: "Dedicated Fleet Contracts",
      description:
        "Secure guaranteed transportation capacity with dedicated equipment, professional drivers, and reliable operational support tailored to your business.",
    },
    {
      title: "Custom Logistics Planning",
      description:
        "Benefit from personalized routing, scheduling, and logistics management that improve efficiency and adapt to your unique transportation requirements.",
    },
  ];
  return (
    <>
      <PageHero
        backgroundImage={DedicatedHero}
        subtitle="Dedicated Contract Services"
        title="Customized Logistics."
        highlight="Built Around Your Business."
        description="Our dedicated fleet solutions are tailored to your operations, providing reliable drivers, consistent capacity, and seamless transportation that supports your long-term business growth."
        currentPage="Dedicated Contract Services"
      />

      <ServiceDetail
        image={DedicatedImage}
        subtitle="Dedicated Contract Services"
        title="Custom Logistics Built Around Your Business"
        description1="At Toronto Coast Trucking LTD, we understand that every shipment is unique. Our Specialized and Dedicated Contract Services are tailored to meet your specific transportation requirements—whether you need flatbed hauling, temperature-controlled freight, specialized equipment, or long-term contract logistics. We create flexible transportation solutions that align with your operational goals."
        description2="Our dedicated fleet services provide consistent capacity, branded equipment options, and professional drivers who understand your routes, schedules, and delivery expectations. Combined with advanced dispatch technology, real-time shipment visibility, and proactive communication, we become a trusted extension of your business, delivering reliable logistics support every mile of the way."
      />

      <ServiceBenefits
        title="Specialized Capabilities Include"
        description="Partner with Toronto Coast Trucking LTD for dependable, specialized logistics solutions that go beyond standard freight. From specialized equipment to dedicated fleet operations, we deliver customized transportation services because your cargo deserves a commitment from start to finish."
        benefits={dedicatedBenefits}
      />
      
      <GetStarted />
    </>
  );
};

export default DCS;
