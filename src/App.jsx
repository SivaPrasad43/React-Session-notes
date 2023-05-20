import React from "react";
import PropsComp from "./Pages/Props/PropsComp";
import ListComponent from "./Pages/List/ListComponent";
import ConditionComp from "./Pages/Condition/ConditionComp";
import EventHandlingComponent from "./Pages/Event/EventHandlingComponent";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/RoutePages/Home";
import About from "./Pages/RoutePages/About";
import Contact from "./Pages/RoutePages/Contact";


function App() {
  return (
    <>
      <PropsComp/>
      <ListComponent/>
      <ConditionComp/>
      {/* <EventHandlingComponent/> */}
      <ReactRouting/>
    </>
  )
}

const ReactRouting = () => {
  return(
    <Router>
    <div>
      <nav>
        <ul style={{display:"flex",gap:"30px"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;
