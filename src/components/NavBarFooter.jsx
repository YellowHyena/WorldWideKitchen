import React, { useState } from "react";
import "../App.css"; // Tillfällig css?

// Om något inte används för tillfället är det bara att kommentera ut det :)
const Footer = ({ setHelpButtonPopup }) => {
  return (
    <div className="footer-content">
      <ul>
        {/* <li>
          <button id="about-us-btn">ABOUT US</button>
        </li>
        <li>
          <button id="donate-btn">DONATE</button>
        </li>
        <li>
          <button id="contact-us-btn">CONTACT US</button>
        </li> */}

        <li>
          <button
            id="help-btn"
            onClick={() => {
              setHelpButtonPopup(true);
            }}
          >
            HELP
          </button>
        </li>
        <li>
          <a
            className="simplemaps"
            href="https://www.simplemaps.com"
            target="_blank"
          >
            SIMPLE MAPS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
