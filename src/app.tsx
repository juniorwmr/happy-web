import React from 'react';

import Routes from './routes/routes';

import { AuthProvider } from './context/auth';

import GlobalStyle from './styles/GlobalStyle';
import 'leaflet/dist/leaflet.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  );
};

export default App;
