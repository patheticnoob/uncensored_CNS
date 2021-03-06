import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8n-9k5ut.us.auth0.com"
      clientId="9skZBWcqcBNZZcl75PvvlkfsRJmrgVXu"
      redirectUri={window.location.origin}
    >      <App />
    </Auth0Provider>
  </React.StrictMode>
);
