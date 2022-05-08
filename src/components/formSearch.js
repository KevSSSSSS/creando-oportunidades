import React from "react";
import img2 from "../images/img2.jpg";
import FormModal from "./formModal";

function FormSearch(props) {
  const {title} = props;
  return (
    <div className="card" style={{ width: "20%" }}>
      <img src={img2} alt=""></img>
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            color: "#111646",
            textAlign: "center",
            borderRadius: 10,
          }}
        >
          Buscar
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Busca un trabajador</h6>
        <p className="card-text">
          Si necesitas un trabajo de oficio contacta con los muchos trabajadores
          que hay en nuestra plataforma de forma segura.
        </p>
        <div className="d-grid gap-2 col-10 mx-auto">
          <a href="#" className="btn btn-primary">
            Iniciar Sesion
          </a>
          <a
            href="#"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Registrarse
          </a>
          <FormModal/>
        </div>
      </div>
    </div>
  );
}

export default FormSearch;
