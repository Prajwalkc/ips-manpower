import React from "react";
import image1 from "../assets/img/img1.png";

function About() {
  return (
    <>
      <div
        style={{
          marginTop: "8rem",
          width: "100%",
          height: "10px",
        }}
      ></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={image1} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              With over 20 years of experience, IPS Manpower is Nepal’s leading
              manpower agency, specializing in connecting skilled workers with
              top opportunities in the GCC, Japan, and Europe. We are committed
              to providing seamless, reliable recruitment solutions for both job
              seekers and employers, ensuring successful placements and
              long-term partnerships. In addition to our strong industry
              presence, IPS Manpower has merged with five other respected
              agencies, enhancing our capabilities and expanding our reach. This
              collaboration allows us to offer an even broader range of
              recruitment services, empowering individuals and businesses alike.
              Our dedication to quality and integrity continues to make us a
              trusted leader in the industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
