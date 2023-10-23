import './App.css';
import { ToastContainer } from 'react-toastify';
import React, { useRef } from "react";

import Home from "./components/home/home.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./components/about/about.jsx";
import Proyects from "./components/proyects/proyects.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='app_main'>
      <Home homeRef={homeRef} projectsRef={projectsRef}/>
      <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef}/>
      <About aboutRef={aboutRef}/>
      <Proyects projectsRef={projectsRef}/>
      <Contact contactRef={contactRef}/>
      <Footer homeRef={homeRef}/>
      <ToastContainer />
    </div>
  )
}

export default App;