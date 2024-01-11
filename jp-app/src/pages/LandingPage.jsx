// src/pages/LandingPage.jsx

import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgimg2 from "../images/ferrari1.jpg";
import bgimg1 from "../images/ferrari2.jpg";

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

const WelcomeMessage = styled.h2`
  font-size: 36px;
  color: #fff;
`;

const Description = styled.p`
  font-size: 24px;
  color: #fff;
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
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <img
              src={bgimg2}
              alt="Car 2"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Carousel>
        <WelcomeMessage>Welcome to JPPerformance Cars</WelcomeMessage>
        <Description>
          JP Performance Cars offers premium services with over 20 years
          experience in repairing, maintaining and rebuilding supercars...
        </Description>
      </MainContent>
      <Footer />
    </LandingPageContainer>
  );
}

export default LandingPage;
