import React from 'react';
import {Button} from 'react-bootstrap';
import './contact.css';
import Twit from './images/Twitter.png';
import Instagram from './images/IG.png';
import {Image} from 'react-bootstrap';
const Contact = () => {
  return (
    <div className="contactContainer">
      <h3>Got a Project for me?</h3>
      <p className="contactP">I'd love to hear from you, feel free to get in touch.</p>
      <Button><a href="mailto:elijahmquesada@gmail.com">Contact Me</a></Button>
      <p className="contactP">Follow me on  <a href="https://twitter.com/ElijahQuesada" target="_blank"><Image  src={Twit} width="50px"  /></a></p>
      <p className="contactP">Follow me on <a href="https://www.instagram.com/dangeroussouthamericantreefrog/" target="_blank"><Image  src={Instagram} width="50px"  /></a></p>



    </div>
  )
}

export default Contact
