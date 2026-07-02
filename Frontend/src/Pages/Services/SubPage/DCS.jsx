import React from 'react'
import PageHero from '../../../Components/PageHero'
import DedicatedHero from '../../../assets/AboutImg.jpg'
import ServiceDetail from '../../../Components/ServiceDetail'

const DCS = () => {
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
  // floatingTitle="Dedicated"
  // floatingText="Fleet Solutions"
/>
   </>
  )
}

export default DCS