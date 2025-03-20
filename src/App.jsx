import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navigation/Navbar'
import HomePage from './pages/HomePage'
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 ,delay:200});
  }, []);

  return (
    <div >
    <Navbar></Navbar>
    <HomePage/>
    <Footer></Footer>
    </div>
  )
}

export default App
