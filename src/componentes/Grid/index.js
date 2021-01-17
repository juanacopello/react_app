import React from "react";
import GridCards from './Cards/index'

const GridContainer = () => {
  return (
    <section className="grid-container">
      <GridCards/>
      <GridCards/>
      <GridCards/>
      <GridCards/>
      <GridCards/>
      <GridCards/>
    </section>
  );
};

export default GridContainer