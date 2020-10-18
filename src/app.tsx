import React from 'react';

import Routes from './routes/routes';

import { AuthProvider } from './context/auth';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
