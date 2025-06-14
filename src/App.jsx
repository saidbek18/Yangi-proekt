import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import "./App.css";
import Bolim from "./bolim";
import Bolim2 from "./bolim2";
import Bolim3 from "./bolim3";
import Input from "./input";
import Qiyin from "./qiyin";
import Klub from "./klub";
import Remix from "./remix";
import Footer from "./Footer"
import Modal from "./Modal"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Bolim />
      <Bolim2/>
      <Bolim3/>
      <Input/>
      <Qiyin/>
      <Klub/>
      <Remix/>
      <Footer/>
      <Modal/>
    </div>
  );
}

export default App;
