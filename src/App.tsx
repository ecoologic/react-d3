import React from 'react';
import './App.css';
import logo from './logo.svg';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

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

// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  props: {
    MuiButton: { variant: 'contained' },
  },
  typography: {
    button: { textTransform: 'none' },
  },
});

const App = (): JSX.Element => {
  return (
    <article className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
    </article>
  );
};

export default App;
