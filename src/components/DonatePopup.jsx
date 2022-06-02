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
        <img
          className="donate-picture"
          src="https://www.wfp.org/sites/default/files/styles/gallery_embed_big/public/2022-05/WF1533842_20220406__WFP__BDI_Fredrik_Lernerydf326_0.jpg?itok=TuQxKW6S"
          alt="poorpeople"
        />
        <p className="donate-text">
          Today 811 million people are hungry, and the need of humanitarian and
          development assistance is rapidly growing. <br /> In just two years,
          the number of severely food-insecure people has doubled from 135
          million before the COVID-19 pandemic to 276 million today. <br /> The
          World Food Programme is working to saving lives in emergencies, but
          also to build climate crisis and hunger resilience, so that more
          people on the brink of hunger are not pushed over the edge. <br />
          We at World Wide Kitchen support every persons right to food and we
          donate all surplus from this site to the World Food Programme. <br />{" "}
          WFP need your support. Your generosity will immediately be put to work
          helping build a world with zero hunger.
        </p>
        <a
          className="donate-now-button"
          href="https://donatenow.wfp.org/"
          target="_blank"
        >
          DONATE NOW
        </a>
      </div>
    </div>
  ) : (
    ""
  );
}

export default DonatePopup;
