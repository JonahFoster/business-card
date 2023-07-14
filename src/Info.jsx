import Headshot from './assets/weddingheadshotcrop.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Info() {
    return (
        <div className='card'>
            <img src={Headshot} className='headshot'/>
            <h1 className='name'>Jonah Foster</h1>
            <h2 className='title'>Frontend Developer</h2>
            <p className='website'><a href="https://jonahfoster.com/" target='_blank' rel="noreferrer">jonahfoster.com</a></p>
            <div className='info-links'>
                <p className='email-link'><a href="mailto:foster.jonah@ufl.edu">
                <FontAwesomeIcon icon={faEnvelope} /> Email</a></p>
                <p className='linkedin-link'><a href="https://www.linkedin.com/in/jonahfoster/" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></p>
            </div>
        </div>
    )
} 
