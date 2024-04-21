import React from 'react'

//import styles
import '../components/About.css'

//import NavBar
import Navbar from '../components/Navbar'

//import Link
import { Link } from 'react-router-dom'

//About Page Contents

const About = () => {
  return (
    <>
    <Navbar />
    <div className='about-container'>
      <h1 className='about-title'>
        About DefineThis
      </h1>
      <div className='line'></div>
      <p className='about-body'>
        I made this site to get more practice messing around with APIs.
      </p>
      <p className='about-body'>
        The API that I used for this is from <br /> 
        <Link to='https://dictionaryapi.dev/' target='_blank'>
          Free Dictionary API
        </Link>.
      </p>
      <p className='about-credential'>  
        Coded and designed by Nicholas O'Neill.
      </p>
    </div>
    </>
  )
}

export default About