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

  if (userInfo == "") {
    return <div className="containerEmpity">Elige un trabajador</div>;
  } else {
    return (
      <div className="card m-3">
        <img src={userInfo.photo} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{userInfo.work}</h5>
          <p className="card-text">{userInfo.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Nombre: {userInfo.name} {userInfo.lastname}
          </li>
          <li className="list-group-item">Dirección: {userInfo.address}</li>
          <li className="list-group-item">Telefono: {userInfo.phone}</li>
          <li className="list-group-item">Publicado: {userInfo.date}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Contactar
          </a>
        </div>
      </div>
    );
  }
}

export default WorkerCardInfo;
