import React from "react";
import git from "../../assets/git.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Footer.css'
const Footer = () => {
  return (
    <>
    <hr/>
      <div className="footer-container">
        <div className="footer">
          <div className="informatiion">
            <h1>Ankit Mishra</h1>
            <p>I am available to assist your project,feel free to contact me</p>
             <div className="links">
            <a href="https://github.com/Ankit-Mishra2025">
              <img src={git} />
            </a>
            <a href="https://www.linkedin.com/in/ankit-mishra-7b3393310/">
              <img src={linkedin} />
            </a>
            <a href="mailto:anki95081@gmail.com">
              <img src={email} />
            </a>
          </div>
          </div>

         

          <div className="quickLinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <AnchorLink
                  offset={50}
                  href="#home"
                  className="anchorLink"
                >
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  offset={50}
                  href="#aboutMe"
                 
                  className="anchorLink"
                >
                  About Me
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  offset={50}
                  href="#projects"
                
                  className="anchorLink"
                >
                  Projects
                </AnchorLink>
              </li>

               <li>
                <AnchorLink
                  offset={50}
                  href="#skills"
                  
                  className="anchorLink"
                >
                  Skills
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  offset={50}
                  href="#certificates"
                  
                  className="anchorLink"
                >
                  Certifications
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  offset={50}
                  href="#contact"
                  
                  className="anchorLink"
                >
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>


          <div className="contact-information">
<h2>Contact Information</h2>
<h4>Phone :</h4>
<p>+91 9508184195</p>
<h4>Email :</h4>
<p>devoankit2025@gmail.com</p>
<h4>Location :</h4>
<p>Ghaziabad, Delhi NCR</p>
          </div>
          
        </div>
        
      </div>
      <div className="footer-last">
          <p>Build With Passion❤️ Creativity by Nature😊</p>
      <p>All Rights reserved in @Ankit Mishra</p>
      </div>
    
    </>
  );
};

export default Footer;
