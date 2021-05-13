import React, { Component } from "react";
import fire from "./config/Fire";
import "./components/Header/header.css";
import "./components/Header/menu/menu.css";
import "./components/Contenedor/contenedor.css";
import ContenedorPosts from "./components/Contenedor/ContenedorPosts/ContenedorPost";
import ContenedorPerfil from "./components/Contenedor/ContenedorPerfil/ContenedorPerfil";
import logo from './components/Header/logo.png';

export default class Home extends Component {
  logout() {
    //Cierro sesion
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <a href="/">
            <h1 className="titulo">idia</h1>
            <img className="logo" src={logo}></img>
          </a>

          <div>
            <ul className="desplegable">
              <li className="contactbutt"  onClick={console.log("EMAIL DE CONTACTO: linogbss.business@gmail.com")}>
                Contacto
              </li>
              <li className="delogbutt" onClick={this.logout}>
                Cerrar sesion
              </li>
            </ul>
          </div>
        </div>
        <div className="bodyContainer">
          <ContenedorPosts />
          <ContenedorPerfil />
        </div>
      </div>
    );
  }
}
