import React from "react";
import PageHero from "../../../Components/PageHero";
import LTLHero from "../../../assets/AboutImg.jpg";
import LTLImage from "../../../assets/IMG_1159-scaled.jpg";
import ServiceDetail from "../../../Components/ServiceDetail";
import ServiceBenefits from "../../../Components/ServiceBenefits";
import GetStarted from "../../../Components/GetStarted";

const LTL = () => {
  const ltlBenefits = [
    {
      title: "Cost Savings",
      description:
        "Pay only for the trailer space your freight occupies, helping reduce transportation costs without sacrificing service quality.",
    },
    {
      title: "Optimized Consolidation",
      description:
        "We strategically combine compatible shipments to maximize efficiency, streamline routes, and lower overall shipping expenses.",
    },
    {
      title: "Reliable Scheduling",
      description:
        "Consistent pickup and delivery schedules keep your supply chain moving smoothly and your business operating without interruptions.",
    },
    {
      title: "Shipment Visibility",
      description:
        "Track your freight in real time with complete shipment visibility and proactive updates from pickup to final delivery.",
    },
  ];
  return (
    <>
      <PageHero
        backgroundImage={LTLHero}
        subtitle="Less-Than-Truckload Freight"
        title="Flexible Shipping."
        highlight="Maximum Efficiency."
        description="Ship smaller loads without paying for unused trailer space. Our Less-Than-Truckload (LTL) solutions combine flexibility, affordability, and real-time visibility for every shipment."
        currentPage="Less-Than-Truckload Freight"
      />
      <ServiceDetail
        image={LTLImage}
        subtitle="Less-Than-Truckload Freight"
        title="Flexible, Cost-Efficient, and Always on Schedule"
        description1="When your shipment doesn't require a full trailer, Toronto Coast Trucking LTD offers dependable Less-Than-Truckload (LTL) freight solutions designed to save you both time and money. By efficiently consolidating multiple shipments, we maximize trailer space while ensuring every load is transported safely, securely, and delivered on schedule."
        description2="Our optimized routing strategies, advanced logistics technology, and real-time shipment tracking help reduce transit times while improving cost efficiency. Whether you're shipping pallets, partial loads, or recurring freight, our LTL services provide the flexibility your business needs without compromising reliability, visibility, or customer satisfaction."
      />
      <ServiceBenefits
        title="Benefits of LTL Shipping"
        description="At Toronto Coast Trucking LTD, we make Less-Than-Truckload (LTL) shipping simple, dependable, and cost-effective—providing flexible freight solutions for businesses that value precision, reliability, and affordability in every shipment."
        benefits={ltlBenefits}
      />
      <GetStarted/>
    </>
  );
};

export default LTL;
