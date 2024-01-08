import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./footer.scss";

const Footer = () => {
  return (
      <footer className="footer">
          <ContentWrapper>
              
              <div className="infoText">
               Thank you for choosing CineFiest
               for your movie adventures! We're passionate 
               about bringing you the best in entertainment.
               <br></br> 
               If you have any suggestions or feedback, 
               we'd love to hear from you. Happy watching!

              </div>
              <div className="socialIcons">
      
      <a href="https://www.instagram.com/himanshigoel22" target="_blank" rel="noopener noreferrer" className="icon">
        <FaInstagram />
      </a>
      <a href="https://twitter.com/HimanshiGoel22" target="_blank" rel="noopener noreferrer" className="icon">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/in/himanshi-goel22/" target="_blank" rel="noopener noreferrer" className="icon">
        <FaLinkedin />
      </a>
    </div>
          </ContentWrapper>
      </footer>
  );
};

export default Footer;