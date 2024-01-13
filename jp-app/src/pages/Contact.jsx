
import React, { useState } from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import bgimg1 from "../images/ferrari1.jpg";
import bgimg2 from "../images/ferrari2.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url(${bgimg1}) no-repeat center center;
  background-size: cover;
`;

const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: #fff; // Assuming white text for high contrast against a dark background
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); // Semi-transparent overlay for better text readability
`;

const ContactContainer = styled.div`
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <ContactPageContainer>
      <Header />
      <MainContent>
        <Carousel autoplay>
          {/* ... */}
        </Carousel>
        <ContactContainer>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={form.name} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={form.email} onChange={handleChange} />
            </label>
            <label>
              Message:
              <textarea name="message" value={form.message} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </ContactContainer>
      </MainContent>
      <Footer />
    </ContactPageContainer>
  );
};

export default ContactUs;