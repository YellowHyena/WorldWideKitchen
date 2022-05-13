import React from "react";

function AboutUsPopup(props) {
  return props.trigger ? (
    <div className="aboutuspopup">
      <div className="aboutuspopup-inner">
        <button
          className="aboutus-close-btn"
          onClick={() => props.setTrigger(false)}
        >
          x
        </button>
        <h3>About Us</h3>
        <p>Content...</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AboutUsPopup;
