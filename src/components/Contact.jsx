import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../assets/styles/contact.css"; // Ensure your updated CSS file is imported

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Send email function using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your Service ID
        "YOUR_TEMPLATE_ID", // Replace with your Template ID
        e.target,
        "YOUR_USER_ID" // Replace with your User ID
      )
      .then(
        (result) => {
          console.log("Message sent successfully via Email:", result.text);
          alert("Message sent successfully via Email!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Error sending message via Email.");
        }
      );
  };

  // Send WhatsApp message function
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Subject: ${subject}. Message: ${message}`;

    const phoneNumber = "1234567890"; // Replace with the desired WhatsApp phone number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp link in a new window/tab
    window.open(url, "_blank");
  };

  // Handle form submission for both email and WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e); // Send via EmailJS
    sendToWhatsApp(e); // Send via WhatsApp
  };

  return (
    <>
      <div className="container contact">
        <div className="contact-scroll"></div>
        <h2 className="main-title text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4 mb-3">
              <input
                name="name"
                placeholder="Your Name"
                className="contact-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <input
                name="email"
                placeholder="Your Email"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <input
                name="subject"
                placeholder="Subject"
                className="contact-input"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-12 mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-textarea"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="form-btn">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
