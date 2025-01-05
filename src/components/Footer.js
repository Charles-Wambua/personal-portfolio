import React from "react";
import "./css/Footer.css";

const Footer = ({ isDarkTheme }) => {
  return (
    <footer className={`footer ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://wa.me/254114652533"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/thatsme.charles/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Charles59676543"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/Charles-Wambua"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/charles-wambua-918a0724a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        
        <div className="footer-info">
          <p className="footer-text">
            ©2025 Charles Wambua. All rights reserved.
          </p>
          <p className="contact-info">
            <strong>Email:</strong> <a href="mailto:cm3290006@gmail.com.com">cm3290006@gmail.com</a>
            <br />
            <strong>Phone:</strong> <a href="tel:+254114652533">+254 114 652 533</a>
          </p>
          <p className="location">
            Based in Nairobi, Kenya
          </p>
        </div>
      </div>
      
      <div className="footer-credits">
        <p>
          Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS, Designed with Figma</a> and styled with <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap, AntD and MUI</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
