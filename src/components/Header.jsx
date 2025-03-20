import React from "react";
import "../assets/styles/header.css";

function Header() {
  return (
    <header>
      <video src={require("../assets/video.mp4")} loop autoPlay muted></video>
      <h1 style={{ textAlign: "center" }}>
        Empowering Nepal’s Workforce: Connecting Top Talent with Leading
        Employers
      </h1>
      <div className="row"></div>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
