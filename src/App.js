import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./router/routers";
import "./index.css"; // Import Tailwind CSS
import "./custom.css";
import Navbar from "./components/Layout/Navbar";
import Topbar from "./components/Layout/Topbar";
import Footer from "./components/Layout/Footer";

const App = () => {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
