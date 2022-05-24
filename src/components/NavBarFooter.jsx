import React, { useState } from "react";

const Footer = ({
  setHelpButtonPopup,
  setContactUsButtonPopup,
  setAboutUsButtonPopup,
  setDonateButtonPopup,
}) => {
  return (
    <div className="footer-content">
      <ul>
        <li>
          <button
            id="about-us-btn"
            onClick={() => {
              setAboutUsButtonPopup(true);
            }}
          >
            ABOUT US
          </button>
        </li>
        <li>
          <button
            id="contact-us-btn"
            onClick={() => {
              setContactUsButtonPopup(true);
            }}
          >
            CONTACT US
          </button>
        </li>

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
          <button
            id="donate-btn"
            onClick={() => {
              setDonateButtonPopup(true);
            }}
          >
            DONATE
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
