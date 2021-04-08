/*import { render } from '@testing-library/react'
import React from 'react'

class App extends React.Component{ // <- Heredas las propiedades, metodos y funciones de React.Component
  constructor(props){ // <- funcion constructor instala todos los atributos de la clase
    super(props) //Heredamos las propiedades de React.Component. Las tenes disponibles en el componente

    this.props = {...props, nombre: "Juana"}
    this.saludar = this.saludar.bind(this) //Bindeas la funcion a la clase. Para que tenga acceso a This. Asi tiene acceso al scope de esa clase
  }  


saludar{ 
  console.log("hola" + this.props.nombre);
}
}

  render(){
    return(
      <div className="App">
        <h1>Haga click para saludar</h1>
        <button onClick = {this.saludar}>Haga Click</button>
      </div>
    );
  }

  export default App;*/


