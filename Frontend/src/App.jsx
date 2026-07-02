import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Service from './Pages/Services/Service'
import FTL from './Pages/Services/SubPage/FTL'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Service/> */}
      <FTL/>
      <Footer/>
    </>
  )
}

export default App
