import logo from "./logo_mercado_libre.png";
import "./App.scss";
import computer from "./computer_1.jpg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <form className="search">
          <input
            type="text"
            placeholder="Buscar productos, marcas y mas"
            className="input"
          ></input>
          <button></button>
        </form>
      </header>
      <main className="main">
        <aside className="aside-Bar">
          <h2>Notebook</h2>
          <h4>30.096 resultados</h4>
          <h3>Categorias</h3>
          <ul className="list">
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
            <li>Categoria 4</li>
            <li>Categoria 5</li>
          </ul>
        </aside>
        <section className="grid-container">
          <div className="grid-cards">
            <figure>
              <img src={computer} alt="computer" />
            </figure>
            <h4 className="precio">39.699</h4>
            <p className="cuotas">Hasta 18 cuotas sin interes</p>
            <p className="gratis">Llega gratis mañana</p>
            <p className="producto">Notebook Intel Cloudbook 4gb 64gb</p>
          </div>
          <div className="grid-cards">
            <figure>
              <img src={computer} alt="computer" />
            </figure>
            <h4>35.999</h4>
            <p className="gratis">No llega gratis mañana</p>
            <p>Notebook Gadnic Glow Cloudbook Intel</p>
            <p>Por Gadnic</p>
          </div>
          <div className="grid-cards">
            <figure>
              <img src={computer} alt="computer" />
            </figure>
            <h4>86.999</h4>
            <p>Llega gratis mañana</p>
            <p>Hasta 6 cuotas sin interes</p>
            <p>Notebook Gadnic Glow Cloudbook Intel</p>
            <p>Por Mercado Libre Electronica</p>
          </div>
          <div className="grid-cards">
            <figure>
              <img src={computer} alt="computer" />
            </figure>
            <h4>86.999</h4>
            <p>Llega gratis mañana</p>
            <p>Hasta 6 cuotas sin interes</p>
            <p>Notebook Gadnic Glow Cloudbook Intel</p>
            <p>Por Mercado Libre Electronica</p>
          </div>
          <div className="grid-cards">
            <figure>
              <img src={computer} alt="computer" />
            </figure>
            <h4>86.999</h4>
            <p>Llega gratis mañana</p>
            <p>Hasta 6 cuotas sin interes</p>
            <p>Notebook Gadnic Glow Cloudbook Intel</p>
            <p>Por Mercado Libre Electronica</p>
          </div>
          <div className="grid-cards">
            <figure>
              <img src={computer} alt="computer" />
            </figure>
            <h4>86.999</h4>
            <p>Llega gratis mañana</p>
            <p>Hasta 6 cuotas sin interes</p>
            <p>Notebook Gadnic Glow Cloudbook Intel</p>
            <p>Por Mercado Libre Electronica</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
