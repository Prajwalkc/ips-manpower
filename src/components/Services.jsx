import React from "react";
import Card from "./Card";
import "../assets/styles/services.css";
function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="Recruitment Solutions"
                img="card1.png"
                text="We specialize in finding the right talent for your business, from entry-level positions to executive roles, ensuring a perfect fit for your team and organizational needs."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Temporary Staffing"
                img="card2.png"
                text="Whether you need short-term support or seasonal workers, we provide reliable temporary staffing solutions to help your business stay agile and meet project deadlines."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Outsourcing Services"
                img="card3.png"
                text="Streamline your operations by outsourcing non-core functions. Our expert team will handle tasks like customer service, data entry, and more, allowing you to focus on growth and innovation."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
