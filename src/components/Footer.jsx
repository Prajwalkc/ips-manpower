import { Link, animateScroll as scroll } from "react-scroll";
import React from "react";
import "../assets/styles/footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">IPS Manpower</h1>
                <p
                  className="footer-text"
                  style={{
                    fontSize: 20,
                    fontStyle: "italic",
                  }}
                >
                  Connecting the Right People to the Right Place.
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                    <Link
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to="headerbg"
                    >
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      Services{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      About Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={1000}>
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#">ipnepal3@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#">Kalanki, Kathmandu</Link>
                  </li>
                  <li>
                    <Link to="#">+977 9826135109</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    {/* <a target="_blank" rel="noreferrer" href="">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer">
                      Linkedin
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop">
        <i className="fas fa-level-up-alt"></i>
      </button>
    </footer>
  );
}
export default Footer;
