import './app.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage/Homepage';
// import Forfun from './Pages/ForFun/Forfun';
import About from './Pages/About/About';
import TopNavbar from './Components/TopNavBar/TopNavBar'
import Footer from './Components/Footer/Footer';
import HamburgerMenu from './Components/Hamburger/HamburgerMenu';

function App() {
  return (
    <>
    <Router>
      <TopNavbar></TopNavbar>
      <HamburgerMenu></HamburgerMenu>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        {/* <Route path="/work" element={<Homepage/>} /> */}
        {/* <Route path="/forfun" element={<Forfun/>} /> */}
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer></Footer>
    </Router>

    </>
  )
}

export default App
