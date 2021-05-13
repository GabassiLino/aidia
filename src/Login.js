import React, { Component } from "react";
import fire from "./config/Fire";
import './Login.css'

export default class Login extends Component {
  usuario = React.createRef();
  contraseña = React.createRef();
  emailError = "";
  password1Error = "";
 

  constructor(props) {
    super(props);
    //Este enlace es necesario para hacer que `this` funcione en el callback
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
    containerClass : "container"
    }
  }
  login(e) {
    e.preventDefault();
    var misusuario = this.usuario.current.value;
    var micontraseña = this.contraseña.current.value;
    
    fire
      .auth()
      .signInWithEmailAndPassword(misusuario, micontraseña)
      .then(u => {})
      .catch(function(error) {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    var miusuario = this.usuario.current.value;
    var micontraseña = this.contraseña.current.value;
    fire
      .auth()
      .createUserWithEmailAndPassword(miusuario, micontraseña)
      .then(u => {})
      .catch(function(error) {
        console.log(error);
      });
  }

  clearInputs = () => {
    this.setState({ miusuario: "" });
    this.setState({ micontraseña: "" });
  };

  clearError = () => {
    this.setState({ emailError: "" });
    this.setState({ password1Error: "" });
  };

  handleChangeSignUp = () => {
    this.setState({ containerClass: "container right-panel-active" });
  };
  handleChangeSignIn = () => {
    this.setState({ containerClass: "container" });
  };
  render() {
    return (
      <div>
        <div className={this.state.containerClass} id="conteiner">
          <div className="form-container sign-up-container">
            <form className="formulario" action="#">
              <h1 className="h1-a">Crear cuenta</h1>

              <span className="spanLogin">Por favor ingresa tus datos</span>
              <input
                className="inputName"
                type="email"
                placeholder="Email"
                required
                ref={this.usuario}
                value={this.state.miusuario}
                onChange={(e) => this.setState({ miusuario: e.target.value })}
              />
              <input
                className="inputName"
                type="password"
                placeholder="Contraseña"
                required
                ref={this.contraseña}
                value={this.state.micontraseña}
                onChange={(e) => this.setState({ micontraseña: e.target.value })}
              />
              <button className="botonRegister" onClick={this.signup}>
                Registrar
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="formulario" action="#">
              <h1 className="h1-a">Ingresar</h1>

              <span className="spanLogin">
                Para ingresar rellena con tus datos
              </span>
              <input
                className="inputName"
                type="email"
                placeholder="Email"
                id="singup-email"
                autoFocus
                required
                //value={this.state.useremail}
                onChange={(e) => this.setState({ miusuario: e.target.value })}
              />
              <p className="errorMsg">{this.state.emailError}</p>
              <input
                className="inputName"
                type="password"
                placeholder="Contraseña"
                id="singup-password"
                required
                //value={this.state.userpassword1}
                onChange={(e) => this.setState({ micontraseña: e.target.value })}
              />
              <p className="errorMsg">{this.state.password1Error}</p>
              <button className="botonLogin" onClick={this.login}>
                Ingresar
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="h1-a">¡Bienvenido!</h1>
                <p className="p1">
                  Para ingresar a nuestro sitio rellena tus datos
                </p>
                <button
                  className="botonRegister ghost"
                  id="signIn"
                  onClick={this.handleChangeSignIn}
                >
                  Ingresar
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="h1-a">Hola, ¡bienvenido!</h1>
                <p className="p1">Rellena con tus datos para conectarte</p>
                <button
                  className="botonRegister ghost"
                  id="signUp"
                  onClick={this.handleChangeSignUp}
                >
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer></footer>
      </div>
    );
  }
}
