import React from "react";
import "../../App.css";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="layout-footer">
        <div className="layout-row heading">
          <p>Telesens</p>
        </div>
        <p>
          Telesens RBT service enables subscribers to specify a custom defined
          melody (song) or a personal prompt/greetings (here and after Ring Back
          tone Melody) which caller party can hear instead of the standard
          "beeps" (known as ring back tone) during call initiation process.
          Subscribers can purchase melodies (songs) provided by content provider
          and personalize the service by configuring rules determining what
          content is played based on the caller's phone number, the time/date of
          the call.
        </p>
      </div>
      <div className="layout-footer download-app">
        <p>Download App</p>
        <button>
          <img alt="Get the App" />
        </button>
        <button>
          <img alt="Get the App" />
        </button>
      </div>
      <div className="footer-copyright">
        © Telesens International Ltd., 2013 - 2019, Version 2.0.1.20
      </div>
    </footer>
  );
};

export default Footer;
