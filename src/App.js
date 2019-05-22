import React from 'react';
import BarChart from "./components/BarChart/BarChart"
import PieChart from "./components/PieChart/PieChart"

import "./App.scss"



function App() {
  return (
    <div className="App">
      <h1>CHART PARTY!</h1>

      <BarChart />
      <PieChart />

    </div>
  );

}

export default App;
