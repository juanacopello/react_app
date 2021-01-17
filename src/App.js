import "./App.scss";
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

export default App;
