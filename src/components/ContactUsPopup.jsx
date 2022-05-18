import React from "react";

function ContactUsPopup(props) {
  return props.trigger ? (
    <div className="contactuspopup">
      <div className="contactuspopup-inner">
        <button
          className="contactus-close-btn"
          onClick={() => props.setTrigger(false)}
        >
          x
        </button>
        <h3 className="contact-us-head-text">Contact Us</h3>
        <p>
          Thank you for visiting us! <br /> We would love to hear from you!
          <br /> If you have any suggestions or ideas on how we can improve our
          site or if there is anything you would like to see more of please
          contact us at:
          <a
            className="mail-text"
            href="mailto:Contactworldwidekitchen@mail.com"
          >
            Contactworldwidekitchen@mail.com
          </a>
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ContactUsPopup;
