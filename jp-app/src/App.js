// src/App.js

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import styled from "styled-components";
import { FloatButton } from "antd";

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 0px; // Adjust according to the height of your footer
`;

const App = () => {
  return (
    <Router>
      <AppContainer className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <FloatButton tooltip={<div>Request Quote</div>} />
      </AppContainer>
    </Router>
  );
};

export default App;
