import React, { useState } from "react";
import "./App.css";
import Login from "./screens/login";
import Home from "./screens/home";

function App() {

  const [logueado, setLogueado] = useState(false);
  console.log(logueado);

  return { logueado } ? <Home></Home> : <Login></Login>;
}

export default App;
