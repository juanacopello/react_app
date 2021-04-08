/*import "./App.scss";
import Header from "./componentes/Header"
import Aside from "./componentes/Aside"
import GridContainer from './componentes/Grid/index.js'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Aside/>
        <GridContainer/>
      </main>
    </div>
  );
}

export default App;*/

import { render } from "@testing-library/react";
import React from "react";

class App extends React.Component {
  // <- Heredas las propiedades, metodos y funciones de React.Component
  constructor(props) {
    // <- funcion constructor instala todos los atributos de la clase
    super(props); //Heredamos las propiedades de React.Component. Las tenes disponibles en el componente

    //this.props = { ...props, nombre: "Juana" };
    //this.saludar = this.saludar.bind(this); //Bindeas la funcion a la clase. Para que tenga acceso a This. Asi tiene acceso al scope de esa clase
    this.state = {
      contador: 0
    };

    this.incrementar = this.incrementar.bind(this);

  }

  incrementar() {
    const counter = this.state.contador;
    this.setState({
      contador: counter + 1,
      isCalled: true
    });
  }
  
  /*saludar() { //Usar funciones comunes. No arrow functions
    alert("hola" + this.props.nombre);
  }*/

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>{this.state.contador}</h1> 
        <button onClick={this.incrementar}>Haga Click</button> 
      </div>
    );
  }
}

export default App;
