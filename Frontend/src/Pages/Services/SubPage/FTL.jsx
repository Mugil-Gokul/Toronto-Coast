import React from 'react'
import PageHero from '../../../Components/PageHero'
import FTLHero from '../../../assets/AboutImg.jpg'
import ServiceDetail from '../../../Components/ServiceDetail'

const FTL = () => {
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
   </>
  )
}

export default FTL