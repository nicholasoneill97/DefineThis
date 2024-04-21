//import styles
import '../components/Contact.css'

//import social media icons
import { FaGithub, FaLinkedin } from 'react-icons/fa'

//import Navbar
import Navbar from '../components/Navbar'

//import Link
import { Link } from 'react-router-dom'




const Contact = () => {

  return (
    <>
    <Navbar />
    <div className='contact-container'>
      <h1 className='contact-title'>
        Contact
      </h1>
      <div className='line'></div>
      <p className='contact-icons'>
        <Link to='https://github.com/nicholasoneill97' target='_blank'>
          <FaGithub className='GHicon icon'/> 
        </Link> 
        <Link to='https://www.linkedin.com/in/nicholas-o%E2%80%99neill-57218b1b8/' target='_blank'>
          <FaLinkedin className='LIicon icon'/>
        </Link>
      </p>
      <p className='contact-email'>
        nicholasoneill97@gmail.com
      </p>
    

    

    </div>
    </>
  )
}

export default Contact