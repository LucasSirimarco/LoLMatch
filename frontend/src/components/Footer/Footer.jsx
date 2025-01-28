import React from 'react';
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaDiscord, FaTwitch, FaTwitter } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h1>LoL Match</h1>
        <p>Encuentra tu compañero ideal en la Grieta del Invocador</p>
      </div>

      <div className="footer-socials">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaFacebook />
        </a>
        <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaDiscord />
        </a>
        <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaTwitch />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaTwitter />
        </a>
      </div>

      <div className="footer-rights">
        <p>&copy; 2025 LoL Match. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
