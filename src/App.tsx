import React from 'react';
import './App.css';
import logo from './logo.svg';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core';

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
    <footer className="App__footer">
      Designed by ecoologic &copy; {new Date().getFullYear()}
    </footer>
  );
};

// const theme = createMuiTheme({
//   palette: {
//     common: {},
//   },
// });
// <ThemeProvider theme={theme}>
// </ThemeProvider>

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
