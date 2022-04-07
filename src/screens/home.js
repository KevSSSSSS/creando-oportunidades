import React, { useState } from "react";
import NavBar from "../components/navBar";
import MenuCategories from "../components/menuCategories";
import WorkerCard from "../components/workerCard";
import WorkerCardInfo from "../components/workerCardInfo";

import "../css/divContainer.css";

function Home() {
  const [id, setId] = useState("");

  function handleInfo(e) {
    setId(e);
  }

  return (
    <div>
      <NavBar></NavBar>
      <section id="main-container">
        <div className="block1">
          <MenuCategories></MenuCategories>
        </div>
        <div className="block2">
          <WorkerCard handleInfo={(e) => handleInfo(e)}></WorkerCard>
        </div>
        <div className="block3">
          <WorkerCardInfo id={id}></WorkerCardInfo>
        </div>
      </section>
      <div style={{background: "#111646", height: 50, color: "#FFF", textAlign: "center", marginTop: 20}}>KevsCorporation 2022 &reg; proyecto para pasar la materia de IS</div>
    </div>
  );
}

export default Home;
