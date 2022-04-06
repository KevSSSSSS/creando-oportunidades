import React from "react";
import "./App.css";
import Banner from "./components/banner";
import FormWorker from "./components/formWorker";
import FormSearch from "./components/formSearch";

function App() {

  var screenHeigth = window.innerHeight;
  console.log(screenHeigth);

  return (
    <div style={{height: screenHeigth}}>
      <Banner></Banner>
      <div className="row" style={{width: "100%", justifyContent: "space-evenly", marginTop: "5%"}}>
        <FormWorker></FormWorker>
        <FormSearch></FormSearch>
      </div>
      <div style={{background: "#111646", height: 50, color: "#FFF", textAlign: "center", marginTop: 100}}>KevsCorporation 2022 &reg; proyecto para pasar la materia de IS</div>
    </div>
  );
}

export default App;
