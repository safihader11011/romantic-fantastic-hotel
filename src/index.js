import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'themes/default.theme';
import GlobalStyles from 'assets/style/Global.style';
import AuthProvider from 'context/AuthProvider';
import Routes from './router';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <HashRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </HashRouter>
    </>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
