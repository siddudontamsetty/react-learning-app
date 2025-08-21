import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
import { Home } from "./pages/Home"; 
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        
          <h1> <Link to="/">home Page</Link> </h1>
          <h1> <Link to = "/menu">menu Page</Link> </h1>
          <h1> <Link to ="/contact">contact Page</Link> </h1>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
