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
        <h3>HELP</h3>
        <p>
          Explore our World Wide Kitchen by clicking the red pins marking
          different countries and find yummy recipes from all over the world!
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default HelpPopup;
