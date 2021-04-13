import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ModalProvider } from './contexts/ModalContext';
import { UserProvider } from './contexts/UserContext';

ReactDOM.render(
  <ModalProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </ModalProvider>,
  document.getElementById('root')
);
