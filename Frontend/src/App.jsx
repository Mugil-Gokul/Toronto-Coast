import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Service from "./Pages/Services/Service";

import FTL from "./Pages/Services/SubPage/FTL";
import LTL from "./Pages/Services/SubPage/LTL";
import DCS from "./Pages/Services/SubPage/DCS";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Service />} />

        <Route path="/services/full-truckload-shipping" element={<FTL />} />

        <Route path="/services/less-than-truckload-freight" element={<LTL />} />

        <Route path="/services/dedicated-contract-services" element={<DCS />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
