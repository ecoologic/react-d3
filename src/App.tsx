import React from 'react';
import './App.css';
import logo from './logo.svg';
import CssBaseline from '@material-ui/core/CssBaseline';

import Content from './Content';

const Header = (): JSX.Element => {
  return (
    <header className="App__header">
      <h2>An App</h2>
      <img src={logo} className="Header__logo" alt="logo" />
    </header>
  );
};

const Footer = (): JSX.Element => {
  return (
    <footer className="App__footer rootEl">
      Designed by ecoologic &copy; {new Date().getFullYear()}
    </footer>
  );
};

const App = (): JSX.Element => {
  return (
    <article className="App">
      <CssBaseline />
      <Header />
      <Content />
      <Footer />
    </article>
  );
};

export default App;
