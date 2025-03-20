import React from "react";
import "../assets/styles/testiomonials.css";

const Testiomonials = () => {
  const testimonials = [
    {
      name: "Anil Sharma",
      feedback:
        "I had a great experience with [Agency Name]. They helped me secure a job in the GCC and made the process incredibly smooth and efficient.",
    },
    {
      name: "Sita Thapa",
      feedback:
        "Thanks to [Agency Name], I was able to start a successful career in Japan. Their team guided me every step of the way and made the transition easy.",
    },
    {
      name: "Rajesh Kumar",
      feedback:
        "As an employer, I have worked with [Agency Name] for years, and they consistently provide reliable, skilled workers. Highly recommend their services!",
    },
    {
      name: "Priya Rai",
      feedback:
        "The support I received from [Agency Name] was outstanding. They not only helped me find a job abroad but also assisted with all the necessary paperwork.",
    },
    {
      name: "Nabin Singh",
      feedback:
        "Working with [Agency Name] was a smooth process. They are professional, efficient, and made sure I had everything I needed before moving abroad.",
    },
    {
      name: "Maya Gurung",
      feedback:
        "Thanks to [Agency Name], I secured a fantastic position in Europe. Their guidance and support throughout the application process were invaluable.",
    },
  ];

  return (
    <div>
      <div
        style={{
          marginTop: "8rem",
        }}
      ></div>

      <div className="footer-testimonials">
        <h2 className="main-title text-center">TESTIMONIALS</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="feedback">"{testimonial.feedback}"</p>
              <p className="name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testiomonials;
