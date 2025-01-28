import React from 'react';
import { FiGithub, FiLinkedin, FiDribbble, FiMail } from 'react-icons/fi';
import './Footer.css'; // Importiere das CSS-File

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-bottom">
          <div className="footer-left">
            <span className="footer-copyright">
              © Gylan Salih
            </span>
            <span className="footer-legal">
              <a href="https://github.com/GylanSalih/NextJS-Portify/tree/main">If you like the website, feel free to visit the open-source repository!</a>
            </span>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/GylanSalih/" target="_blank" rel="noopener noreferrer">
              <FiGithub className="footer-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="footer-icon" />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <FiDribbble className="footer-icon" />
            </a>
            <a href="mailto:hello@portfolio.com">
              <FiMail className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;