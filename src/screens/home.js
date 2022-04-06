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
    </div>
  );
}

export default Home;
