import React from "react";

function HelpPopup(props) {
  return props.trigger ? (
    <div className="helppopup">
      <div className="helppopup-inner">
        <button
          className="help-close-btn"
          onClick={() => props.setTrigger(false)}
        >
          x
        </button>
        <h3 className="help-us-head-text">HELP</h3>
        <p>
          Explore World Wide Kitchens map by zooming in and out on each
          continent and then click on the country that you are interested in to
          find yummy recipes from all over the world. Click our "surprise me"
          button for inspiration if you don't know which country to chose.{" "}
          <br /> Enjoy the ride!
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default HelpPopup;
