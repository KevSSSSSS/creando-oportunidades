import React, { useEffect, useState } from "react";
import { createUserWhitEmail } from "../firebase/authentication";

import { getAuth } from "firebase/auth";

export default function FormModalWorker() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth();

  return (
    <div
      className="modal fade"
      id="registerModalWorker"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Registro de trabajador
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="inputEmailW"
                placeholder="correo"
                onChange={(text) => {
                  setEmail(text.target.value);
                }}
              ></input>
              <label htmlFor="floatingInputGrid">Correo electrónico</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="inputPasswordW"
                placeholder="************"
                onChange={(text) => {
                  setPassword(text.target.value);
                }}
              ></input>
              <label htmlFor="floatingInputGrid">Contraseña</label>
            </div>
            <br />
            <div className="row g-2">
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="inputNameW"
                    placeholder="name"
                  ></input>
                  <label htmlFor="floatingInputGrid">Nombre</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastnameW"
                    placeholder="lastname"
                  ></input>
                  <label htmlFor="floatingInputGrid">Apellidos</label>
                </div>
              </div>
            </div>
            <br />
            <div className="row g-2">
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="inputAgeW"
                    placeholder="age"
                  ></input>
                  <label htmlFor="floatingInputGrid">Edad</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="inputPhoneW"
                    placeholder="phone"
                  ></input>
                  <label htmlFor="floatingInputGrid">Teléfono</label>
                </div>
              </div>
            </div>
            <br />
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="inputAddressW"
                placeholder="address"
              ></input>
              <label htmlFor="floatingInputGrid">Dirección</label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                createUserWhitEmail(email, password);
              }}
            >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
