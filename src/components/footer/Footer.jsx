import React from "react";
import "./style.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <hr />
        <div className="footer-top-link">
          <ul>
            <li>About</li>
            <li>Zestimates</li>
            <li>Research</li>
            <li>Careers</li>
            <li>Careers - U.S. Privacy Notice</li>
            <li>Careers - Mexico Privacy Notice</li>
            <li>Help</li>
            <li>Advertise</li>
            <li>Terms of Use</li>
            <li> Privacy Policy</li>
            <li> Cookies</li>
            <li> Sitemap</li>
          </ul>
        </div>
      </div>

      <div className="footer-middle">
        <span>Contact Zillow.inc Brokerage</span>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-top">
          <img
            src="https://s.zillowstatic.com/pfs/static/app-store-badge.svg"
            alt="App store logo"
            title="Download on the App Store"
          ></img>
          <img
            src="https://s.zillowstatic.com/pfs/static/google-play-badge.svg"
            alt="Google play logo"
            title="Get it on Google Play"
          ></img>
        </div>
        <div className="footer-bottom-middle">
          <span>Follow us:</span>
          <img src="./face-logo.png" alt="Facebook logo" />
          <img src="./x-twitter.svg" alt="Twitter logo" />
          <img src="./tiktok.jpg" alt="Instagram logo" />

          <span>© 2022 Zillow, Inc.</span>
        </div>
        <div className="footer-bottom-bottom">
          <img
            src="https://s.zillowstatic.com/pfs/static/footer-art.svg"
            type="image/svg+xml"
            alt="Footer art"
            focusable="false"
            height="160"
            width="1200"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
