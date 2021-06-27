import React from "react";
import "./App.css";
import logo from "./logo.svg";

import * as d3 from "d3";

const graphId = "theGraph";

const Content = () => {
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
    <main className="App__content">
      <div id={graphId} ref={graphRef} className="Graph rootEl">
        d3 here
      </div>
    </main>
  );
};

const Header = () => {
  return <header className="App__header">
    <h2>An App</h2>
    <img src={logo} className="Header__logo" alt="logo" />
  </header>
}

const Footer = () => {
  return <footer className="App__footer rootEl">
    Designed by ecoologic &copy; { (new Date()).getFullYear() }
  </footer>
}

function App() {
  return (
    <article className="App">
      <Header />
      <Content />
      <Footer />
    </article>
  );
}

export default App;
