import React from "react";
function FormSearch() {
  return (
    <div className="card border-primary mb-3" style={{width: "20%"}}>
      <div className="card-body">
        <h5 className="card-title" style={{backgroundColor: "#111646", color: "#FFFFFF", textAlign: "center", borderRadius: 10}}>Buscar</h5>
        <h6 className="card-subtitle mb-2 text-muted">Busca un trabajador</h6>
        <p className="card-text">
          Si necesitas un trabajo de oficio contacta con los muchos trabajadores que hay en nuestra plataforma de forma segura.
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

export default FormSearch;