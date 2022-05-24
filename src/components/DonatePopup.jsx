import React from "react";

function DonatePopup(props) {
  return props.trigger ? (
    <div className="donatepopup">
      <div className="donatepopup-inner">
        <button
          className="donate-close-btn"
          onClick={() => props.setTrigger(false)}
        >
          x
        </button>
        <h3 className="donate-head-text">Donate</h3>
        <p>Donate Text Here</p>
        <a href="">Donate Link Here</a>
      </div>
    </div>
  ) : (
    ""
  );
}

export default DonatePopup;
