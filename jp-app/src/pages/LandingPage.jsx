// src/pages/LandingPage.jsx

import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgimg1 from "../images/ferrari1.jpg";
import bgimg2 from "../images/ferrari2.jpg";

const LandingPageContainer = styled.div`
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

const WelcomeMessage = styled.h2`
  font-size: 36px;
`;

const MessageContainer = styled.div`
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Description = styled.p`
  font-size: 24px;
`;
const SubDescription = styled.p`
  font-size: 14px;
`;

function LandingPage() {
  return (
    <LandingPageContainer>
      <Header />
      <MainContent>
        <Carousel autoplay>
          <div>
            <img
              src={bgimg1}
              alt="Car 1"
              style={{ width: "100%", height: "auto", opacity: 0.5 }} // Semi-transparent images in the carousel
            />
          </div>
          <div>
            <img
              src={bgimg2}
              alt="Car 2"
              style={{ width: "100%", height: "auto", opacity: 0.5 }} // Semi-transparent images in the carousel
            />
          </div>
        </Carousel>
        <MessageContainer>
          <WelcomeMessage>Welcome to JPPerformance Cars</WelcomeMessage>
          <Description>
            JP Performance Cars offers premium services with over 20 years
            experience in repairing, maintaining and rebuilding supercars...
          </Description>
          <SubDescription>
            JP Performance Cars offers premium services with over 20 years
            experience in repairing, maintaining and rebuilding supercars...
          </SubDescription>
        </MessageContainer>
      </MainContent>
      <Footer />
    </LandingPageContainer>
  );
}

export default LandingPage;
