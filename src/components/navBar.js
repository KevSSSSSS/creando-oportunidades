import React from "react";
import logosm from "../images/logoSmall.png";

//Datos obtenidos de la base de datos
const user = {
  "name": "Kevin Daniel",
  "apellidoP": "Flores",
  "apellidoM": "Lopez",
  "age": 22,
  "phone": "7291754034",
  "photo": "https://scontent.ftlc1-1.fna.fbcdn.net/v/t1.6435-9/41675008_1730112417111859_6064227413720563712_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=CqGliCpvs7MAX_NElcV&_nc_ht=scontent.ftlc1-1.fna&oh=00_AT_i3NdvHSrvh1wm5_VppSwM2JQQwyApat8iThf7an--ig&oe=6271AF0E"
}

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logosm} alt="logo" height={50}></img>
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <img
                  src={user.photo}
                  alt="perfil"
                  height={30}
                ></img>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.name} {user.apellidoP} {user.apellidoM}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Cuenta
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Registros
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Arribas las chivas
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <form class="d-flex justify-content-center">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Escribe algo"
                  aria-label="Search"
                ></input>
                <button class="btn btn-outline-success" type="submit">
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
