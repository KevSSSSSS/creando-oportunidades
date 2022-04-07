import React from "react";
import workers from "../test/workes.json";

function WorkerCard(props) {
  //Arreglo de objetos para pruebas

  const { handleInfo } = props;

  return workers.map((e) => (
    <div className="card m-5 w-75 h-auto shadow-lg" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={e.photo} className="img-fluid rounded-start" alt=""></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{e.work}</h5>
            <h6>
              {e.name} {e.lastname}
            </h6>
            <p className="card-text">{e.description}</p>
            <p className="card-text">
              <small className="text-muted">{e.date}</small>
              
              <button
                onClick={() => {
                  handleInfo(e);
                }}
                type="button"
                class="btn btn-ligth container"
              >
                Ver más
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default WorkerCard;
