import React from "react";
import img1 from "../images/img1.jpg";
function FormWorker() {
  return (
    <div className="card" style={{ width: "20%" }} >
      <img src={img1} alt=""></img>
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            color: "#111646",
            textAlign: "center",
            borderRadius: 10,
          }}
        >
          Trabajador
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Consigue un trabajo</h6>
        <p className="card-text">
          Si te dedicas a algùn oficio laboral nosotros podemos conseguir
          clientes que puedan contratar tus servicios.
        </p>
        <div className="d-grid gap-2 col-10 mx-auto">
          <a href="#" className="btn btn-primary">
            Iniciar Sesion
          </a>
          <a href="#" className="btn btn-danger">
            Registrarse
          </a>
        </div>
      </div>
    </div>
  );
}

export default FormWorker;
