// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTiktok,
  faXTwitter,
  faInstagram,
  faDiscord,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://www.tiktok.com/@lucky_int"
          target="TTprofiile"
          rel="boombastic"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a
          href="https://twitter.com/Romdeaustudio"
          target="Xprofile"
          rel="boombastic"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a
          href="https://instagram.com/savanahghost/"
          target="igprofile"
          rel="boombastic"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://discord.gg/eNXppTTy3x"
          target="igprofile"
          rel="boombastic"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a
          href="https://www.youtube.com/@Romdeaustudios"
          target="igprofile"
          rel="boombastic"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
