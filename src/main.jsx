import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import * as Pace from "pace-js";
import "pace-js";
import "./Components/preloader.css";

// import 'pace-js/themes/white/pace-theme-minimal.css'
// import 'pace-js/themes/white/pace-theme-big-counter.css'
// window.paceOptions = {
//   ajax: true,
//   document: true,
//   eventLag: false,
// };
// window.pace.start();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
