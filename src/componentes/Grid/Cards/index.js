import React from "react";
import ComputerImage from './computer.js'

const GridCards = () => {
  return (
    <div className="grid-cards">
      <ComputerImage/>
      <h4 className="precio">39.699</h4>
      <p className="cuotas">Hasta 18 cuotas sin interes</p>
      <p className="gratis">Llega gratis mañana</p>
      <p className="producto">Notebook Intel Cloudbook 4gb 64gb</p>
    </div>
  );
};

export default GridCards