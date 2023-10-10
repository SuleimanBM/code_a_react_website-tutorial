import React, {useState} from 'react'
import Logo from "../Assets/pizzaLogo.png"
import {Link} from "react-router-dom";

import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'


function Navbar() {
  const[openLinks, setpenLinks] = useState(false)

  const toggleNavbar = () =>{
    setpenLinks(!openLinks);
  }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks? "open" : "close"}>
            <img src={Logo} alt=''/>
            <div className='hiddenLinks'>
            <Link to='/'>Home</Link>
            <Link to='/Menu'>Menu</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/Menu'>Menu</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
            <button onClick={toggleNavbar}>
              <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar