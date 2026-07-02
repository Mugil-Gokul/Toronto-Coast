import React from 'react'
import HomeHero from './HomeHero'
import HomeAbout from './HomeAbout'
import HomeService from './HomeService'
import HomeCareer from './HomeCareer'
import HomeTestimonials from './HomeTestimonials'
import GetStarted from '../../Components/GetStarted'

const Home = () => {
  return (
    <>
    <HomeHero/>
    <HomeAbout/>
    <HomeService/>
    <HomeCareer/>
    <HomeTestimonials/>
    <GetStarted/>
    </>
  )
}

export default Home