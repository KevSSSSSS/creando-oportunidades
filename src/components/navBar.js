import React from "react";
import logosm from "../images/logoSmall.png";

//Datos obtenidos de la base de datos
const user = {
  name: "Kevin Daniel",
  apellidoP: "Flores",
  apellidoM: "Lopez",
  age: 22,
  phone: "7291754034",
  photo:
    "https://scontent.ftlc1-1.fna.fbcdn.net/v/t1.6435-9/41675008_1730112417111859_6064227413720563712_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=CqGliCpvs7MAX_NElcV&_nc_ht=scontent.ftlc1-1.fna&oh=00_AT_i3NdvHSrvh1wm5_VppSwM2JQQwyApat8iThf7an--ig&oe=6271AF0E",
};

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logosm} alt="logo" height={50}></img>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <img src={user.photo} alt="perfil" height={30}></img>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.name} {user.apellidoP} {user.apellidoM}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Cuenta
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Registros
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Arribas las chivas
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <form className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Escribe algo"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>
            </li>
          </ul>
          <a href="#" className="btn btn-danger">
            Cerrar Sesion
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
