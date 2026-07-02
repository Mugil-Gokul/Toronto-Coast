import React from "react";
import PageHero from "../../../Components/PageHero";
import FTLHero from "../../../assets/AboutImg.jpg";
import DetailImg from "../../../assets/DJI_20251101113901_0085_D.jpg";
import ServiceDetail from "../../../Components/ServiceDetail";
import ServiceBenefits from "../../../Components/ServiceBenefits";
import GetStarted from "../../../Components/GetStarted";

const FTL = () => {
  const ftlBenefits = [
    {
      title: "Dedicated Capacity",
      description:
        "One truck, one shipment—your freight receives our complete attention from pickup to delivery.",
    },
    {
      title: "Faster Transit Times",
      description:
        "Direct routes with fewer stops ensure quicker deliveries and improved scheduling reliability.",
    },
    {
      title: "Enhanced Security",
      description:
        "Reduced handling minimizes the risk of damage, loss, or delays during transportation.",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Monitor your shipment with live GPS tracking and proactive communication every step of the way.",
    },
  ];
  return (
    <>
      <PageHero
        backgroundImage={FTLHero}
        subtitle="Full Truckload Shipping"
        title="Dedicated Capacity."
        highlight="Delivered On Time."
        description="Our Full Truckload (FTL) service provides dedicated transportation for high-volume shipments, ensuring faster transit times, maximum security, and dependable delivery from pickup to destination."
        currentPage="Full Truckload Shipping"
      />

      <ServiceDetail
        image={DetailImg}
        subtitle="Full Truckload Shipping"
        title="Reliable, Dedicated, and Built for Speed"
        description1="When your shipment fills the trailer, Toronto Coast Trucking LTD provides the efficiency and control you need with Full Truckload (FTL) Shipping. Our modern fleet and experienced drivers ensure your freight moves directly from origin to destination—no transfers, no delays."
        description2="We operate across North America, giving you dedicated capacity and predictable delivery times. With advanced tracking technology, proactive communication, and strict safety standards, you can count on seamless, end-to-end visibility throughout every shipment."
      />

      <ServiceBenefits
        title="Benefits of FTL Shipping"
        description="Whether it's high-value cargo, bulk goods, or time-sensitive materials, our Full Truckload (FTL) services deliver the reliability, security, and consistency your business depends on."
        benefits={ftlBenefits}
      />

      <GetStarted/>
    </>
  );
};

export default FTL;
