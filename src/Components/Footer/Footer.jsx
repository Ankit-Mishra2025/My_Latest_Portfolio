import React from 'react'
import './Footer.css'
import footer from '../../assets/Contact.jpg'
import linkedin from '../../assets/linkedin.svg'

import git from '../../assets/git.svg'
import email from '../../assets/email.png'
const Footer = () => {
  return (
    <>
 <div className='footer'>
      {/* <div className="footer-top">
<div className="left-footer">
    <img src={footer}/>
<p>I am a web developer from,Ghaizabad with experience of creating 10+ projects </p>
</div>

<div className="right-Footer">
    <div className="footer-input">
        <label htmlFor='email' name="email">  Email:  </label>
<input type="email" placeholder='enter your email'/>
<button type="submit" class="footer-submission">Send Your Message</button>
    </div>

</div>
      </div> */}
<hr/>
      <div className="footer-bottom">
<p className='footer-bottom-left'>
@2025 Ankit Mishra. All rights preserved.
 <p> Build with passion ❤️</p>
</p>


<div className="footer-bootom-right">
    <ul>
        <li>
            <a href="https://www.linkedin.com/in/ankit-mishra-7b3393310/">
            <img src={linkedin}/>
            </a>
            <a href="https://github.com/Ankit-Mishra2025"><img src={git}/></a>
            <a href="anki95081@gmail.com"><img src={email}/></a>
           
        </li>
    </ul>
</div>
      </div>
    </div>

    </>
   
  )
}

export default Footer
