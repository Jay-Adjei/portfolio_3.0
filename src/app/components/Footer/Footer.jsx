import React from 'react';
import { Github, Linkedin, Dribbble, Mail, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-bottom">
          <div className="footer-left">
            <span className="footer-copyright">© Japhet Adofo-Adjei</span>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/Jay-Adjei"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="footer-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/japhet-adofo-adjei-347706256/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="footer-icon" />
            </a>
            <a
              href="https://www.instagram.com/_.mr.adjei/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="footer-icon" />
            </a>
            <a href="mailto:mr.adjei17@gmail.com">
              <Mail className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
