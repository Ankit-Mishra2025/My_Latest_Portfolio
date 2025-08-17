import React from "react";
import git from "../../assets/git.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import imageLogo from "../../assets/nameLogo.webp";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="information">
            <div className="informationFooter">
              <img src={imageLogo} />
              <h1>Ankit Mishra</h1>
              <p>
                Web <span>Developer</span>
              </p>
            </div>
            <div>
              <p className="footerAbout">
                {" "}
                Writing and building a smooth and pixels perfect web
                applications and learning backend development
              </p>
            </div>

            <div className="link">
              <a
                href="https://github.com/Ankit-Mishra2025"
                target="
            _blank"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ankit-mishra-7b3393310/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="mailto:anki95081@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="quickLinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <AnchorLink offset={50} href="#home" className="anchorLink">
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={50} href="#aboutMe" className="anchorLink">
                  About Me
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={50} href="#projects" className="anchorLink">
                  Projects
                </AnchorLink>
              </li>

              <li>
                <AnchorLink offset={50} href="#skills" className="anchorLink">
                  Skills
                </AnchorLink>
              </li>

              <li>
                <AnchorLink offset={50} href="#contact" className="anchorLink">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>

          <div className="services">
            <h1>Services</h1>
            <div className="hoverServices">
              <h2>Web Development</h2>
              <p>Modern web application using frameworks</p>
            </div>
            <div className="hoverServices">
              {" "}
              <h2>Front-End & UI/UX Design</h2>
              <p>Craft and design smooth and pixels perfect design</p>
            </div>
            <div className="hoverServices">
              <h2>Backend Development</h2>
              <p>Learning and creating backend web applications</p>
            </div>
          </div>

          <div className="contactInformation">
            <h1>Contact Information</h1>
            <div className="contactHover">
              {" "}
              <h1>Phone No:</h1>
              <p>+91 9508184195</p>
            </div>
            <div className="contactHover">
              <h1>Email:</h1>
              <p>devoankit2025@gmail.com</p>
            </div>
            <div className="contactHover">
              <h1>Location:</h1>
              <p>Ghaziabad,Delhi NCR</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerLast">
        <h1>All rights reserved in @Ankit Mishra 2025</h1>
        <p>
          Developed and maintained by  
          <a href="https://www.linkedin.com/in/ankit-mishra-7b3393310/">
            <span> Ankit Mishra</span>
          </a>
          <br/>
            <h5>Made with❤️ and creativity by Passion😊</h5>
        </p>
      

        <div className="upHome">
          <a href="#home">
            <i class="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
