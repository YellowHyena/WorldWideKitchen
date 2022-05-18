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
        <h3 className="about-us-head-text">About Us</h3>
        <p>
          Welcome to World Wide Kitchen! <br /> We are a nonprofit organization
          with a passion for food and culture. <br /> If you are looking for
          inspiration and to gain more kowledge about worlds food, you are in
          the right place. <br /> World Wide Kitchen open up the doors to the
          world’s kitchens. <br /> Our service provides easy access to recipes
          from all around the world in one place.
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AboutUsPopup;
