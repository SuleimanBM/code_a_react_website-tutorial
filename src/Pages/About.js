import React from 'react'
import MultiplePizza from '../Assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizza})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore 
                 et dolore magna aliqua. Ut enim ad m
                 inim veniam, quis nostrud exercitati
                 on ullamco laboris nisi ut aliquip 
                 ex ea commodo consequat. Duis aute 
                 irure dolor in reprehenderit in vol
                 uptate velit esse cillum dolore eu 
                 fugiat nulla pariatur. Excepteur sin
                 t occaecat cupidatat non proident
                , sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  )
}

export default About