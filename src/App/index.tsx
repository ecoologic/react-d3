import React from 'react';
import './index.css';
// import logo from '../logo.svg';

import Content from '../Content';
import Themed from './Themed';

const Header = (): JSX.Element => {
  return (
    <header className="App__header">
      <h2>An App</h2>
    </header>
  );
};
// <img src={logo} className="Header__logo" alt="logo" />

const Footer = (): JSX.Element => {
  return (
    <footer className="App__footer">
      Designed by ecoologic &copy; {new Date().getFullYear()}
    </footer>
  );
};

const App = (): JSX.Element => {
  return (
    <article className="App">
      <Themed>
        <Header />
        <Content />
        <Footer />
      </Themed>
    </article>
  );
};

export default App;
