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
        <h3>Contact Us</h3>
        <p>Content...</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ContactUsPopup;
