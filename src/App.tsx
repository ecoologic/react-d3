import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as d3 from "d3";

const graphId = "theGraph";

const Graph = () => {
  const graphRef = React.useRef(null);
  React.useEffect(() => {
    // d3.select(`#${graphId}`).style("color", "green");
    d3.select(`#${graphId}`)
      .selectAll("div")
      .data([1, 2, 3])
      .enter()
      .append("div")
      .text((data) => data);
  }, []);
  return (
    <div id={graphId} ref={graphRef}>
      d3 here
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <Graph />
      </section>
    </div>
  );
}

export default App;
