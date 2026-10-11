import React from "react";
import { Link } from "react-router-dom";
import HomeIcone from '@mui/icons-material/Home'
import PersonIcone from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import Codelcon from '@mui/icons-material/Code'
import ContactMaillcon from '@mui/icons-material/ContactMail'

function Navigation() {
  return (
    <nav className="navbar">


      <h2 className="logo">Krishnaram.</h2>

      <div className="nav-links">
           
        <Link to="/" > <HomeIcone className="home"/> Home</Link>
        <Link to="/about"><PersonIcone/> About</Link>
        <Link to="/qualification"><SchoolIcon/> Qualification</Link>
        <Link to="/project"><Codelcon/> Projects</Link>
        <Link to="/Contact"> <ContactMaillcon/> Contact</Link>

      </div>

    </nav>
  );
}

export default Navigation;