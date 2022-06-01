import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MyNavbar from "./components/navbar/navbar.js";
import Card from "./components/profile-card/card.js";
import Experience from "./components/experience/experience.js";
import Projects from "./components/projects/projects.js";
import About from "./components/about/about.js";
import Footer from "./components/footer/footer.js";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (


    <>

      <MyNavbar></MyNavbar>

      <div className="columns">


        <Card></Card>


      </div>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>

    </>

  );
}

export default App;
