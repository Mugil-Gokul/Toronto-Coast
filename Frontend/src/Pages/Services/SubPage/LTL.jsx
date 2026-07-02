import React from 'react'
import PageHero from '../../../Components/PageHero'
import LTLHero from '../../../assets/AboutImg.jpg'
import ServiceDetail from '../../../Components/ServiceDetail'

const LTL = () => {
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
  // floatingTitle="Flexible"
  // floatingText="LTL Solutions"
/>
   </>
  )
}

export default LTL