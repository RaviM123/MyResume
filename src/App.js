// import Header from "./components/Header";
// import About from "./components/About";
// import Home from "./components/Home";
// import {BrowserRouter as Router,Routes, Route} from 'react-router-dom' 
// import Contact from "./components/Contact";
// import Project from "./components/Project";
// import { Element } from "react-scroll";
// import DetailProject from "./components/DetailProject";
// const App = () => {
//   return (
//    <Router>
//    <Header/>
//    <Home/>
//    <About/>
//    <Project/>
//    <Contact/>
//    <Routes>
//    <Route path='/detail/:id' element={<DetailProject/>}/>
//    </Routes>
   
//    </Router>
//   );
// };


// export default App;

import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { Element } from "react-scroll";
import Major from "./components/Major";
import DetailProject from "./components/DetailProject";

const App = () => {
  return (
    <Router>
       {/* <Header /> */}
     {/* <Home/>
      <About/>
      <Project/>
      <Contact/> */}

      <Routes>
        <Route path="/" element={<Major/>}/>
        <Route path="/detail/:name" element={<DetailProject />} />
      </Routes>
    </Router>
  );
};

export default App;

