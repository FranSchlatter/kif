import './navbar.css';
import React, { useState, useEffect } from "react";

function Navbar({ homeRef, aboutRef, projectsRef, contactRef }) {
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const navRef = React.useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); ;
  });

  const handleScroll = () => {
    if (window.pageYOffset >= window.innerHeight - 48) setSticky(true);
    else setSticky(false);

    const homePos = homeRef.current.offsetTop;
    const aboutPos = aboutRef.current.offsetTop;
    const projectsPos = projectsRef.current.offsetTop;
    const contactPos = contactRef.current.offsetTop;

    if ( window.pageYOffset >= homePos && window.pageYOffset < aboutPos ) setActiveSection("home");
    else if ( window.pageYOffset >= aboutPos && window.pageYOffset < projectsPos ) setActiveSection("about");
    else if ( window.pageYOffset >= projectsPos && window.pageYOffset < contactPos ) setActiveSection("projects");
    else if (window.pageYOffset >= contactPos) setActiveSection("contact");
    else setActiveSection(null);
  };

  const handleClickHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection("home");
  };

  const handleClickAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection("about");
  };

  const handleClickProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection("projects");
  };

  const handleClickContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection("contact");
  };

  return (
    <div ref={navRef} className={sticky ? "sticky" : "navbar_app"}>
      <div className='navbar_options'>
        <button onClick={handleClickHome} className={activeSection === "home" ? "active" : ""} > Home </button>
        <button onClick={handleClickAbout} className={activeSection === "about" ? "active" : ""} > About </button>
        <button onClick={handleClickProjects} className={activeSection === "projects" ? "active" : ""} > Projects </button>
        <button onClick={handleClickContact} className={activeSection === "contact" ? "active" : ""} > Contact </button>
      </div>
    </div>
  );
}

export default Navbar;