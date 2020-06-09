import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import maquinadeescrever from "../maquinadeescrever.jpg";

class Maquina extends React.Component {
  render() {
    return (
      <>
        <div className="hero text-center">
          <h1 className="text-light">A Máquina</h1>
          <h2 className="text-muted">
            O que há de mais moderno e eficiente na mineração de Bitcoin!
          </h2>
        </div>
        <img
          className="img-fluid"
          src={maquinadeescrever}
          alt="maquinadeescrever"
        ></img>

        <h3 className="mt-5 text-center">
          Essa é a máquina possante e potente que você estará adquirindo.
        </h3>
      </>
    );
  }
}

export default Maquina;
