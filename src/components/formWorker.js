import React from "react";
function FormWorker() {
  return (
    <div className="card border-primary mb-3" style={{width: "20%"}}>
      <div className="card-body">
        <h5 className="card-title" style={{backgroundColor: "#111646", color: "#FFFFFF", textAlign: "center", borderRadius: 10}}>Trabajor</h5>
        <h6 className="card-subtitle mb-2 text-muted">Consigue un trabajo</h6>
        <p className="card-text">
          Si te dedicas a algùn oficio laboral nosotros podemos conseguir clientes que puedan contratar tus servicios.
        </p>
        <a href="#" className="card-link">
          Iniciar Sesion
        </a>
        <a href="#" className="card-link">
          Registrarse
        </a>
      </div>
    </div>
  );
}

export default FormWorker;
