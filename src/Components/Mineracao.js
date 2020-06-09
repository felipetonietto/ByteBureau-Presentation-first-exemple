import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import bitcoincover from "../bitcoincover.webp";
import { Player } from "video-react";
import ReactPlayer from "react-player";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Mineracao extends React.Component {
  render() {
    return (
      <>
        <link rel="stylesheet" href="/css/video-react.css" />
        <div className="hero text-center">
          <h1 className="text-light">Mineração</h1>
          <h2 className="text-muted">O que é mineração de Bitcoin?</h2>
        </div>

        <h4 className="text-center mt-5">
          Assista este vídeo explicativo para entender melhor sobre a mineração.
        </h4>

        <div className="nav justify-content-center mt-5">
          <ReactPlayer url="https://youtu.be/GmOzih6I1zs" />
        </div>

        <h4 className="text-center mt-5">
          Agora você que você já entendeu, entre em contato com nossa equipe!
        </h4>
      </>
    );
  }
}

export default Mineracao;
