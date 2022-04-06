import React, { useEffect, useState } from "react";

import workers from "../test/workes.json";

import "../css/form.css";

function WorkerCardInfo(props) {
  const { id } = props;
  const [userInfo, setUserInfo] = useState("");

  function extractInfoUser(id) {
    for (var i = 0; i < workers.length; i++) {
      if (workers[i].id == id) {
        setUserInfo(workers[i]);
      }
    }
  }

  useEffect(() => {
    extractInfoUser(id.id);
  }, [id]);

  if (userInfo === "") {
    return <div className="containerEmpity">Elige un trabajador</div>;
  } else {
    return (
      <div class="card">
        <img src={userInfo.photo} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">{userInfo.work}</h5>
          <p class="card-text">{userInfo.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Nombre: {userInfo.name} {userInfo.lastname}
          </li>
          <li class="list-group-item">Dirección: {userInfo.address}</li>
          <li class="list-group-item">Telefono: {userInfo.phone}</li>
          <li class="list-group-item">Publicado: {userInfo.date}</li>
        </ul>
        <div class="card-body">
          <a href="#" className="btn btn-primary">
            Contactar
          </a>
        </div>
      </div>
    );
  }
}

export default WorkerCardInfo;
