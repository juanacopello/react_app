import React from "react";
import List from './List.js'

const Aside = () => {
  return(
    <aside className="aside-Bar">
    <h2>Notebook</h2>
    <h4>30.096 resultados</h4>
    <h3>Categorias</h3>
    <List/>
  </aside>
  )
};

export default Aside;