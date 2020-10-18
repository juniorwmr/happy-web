import React from 'react';
import { useContext, createContext, useState } from 'react';

interface IAuthData {
  signed: boolean;
  setSigned: (signed: boolean) => void;
}

const AuthContext = createContext({} as IAuthData);

export const AuthProvider: React.FC = (props) => {
  const [signed, setSigned] = useState(false);
  return (
    <AuthContext.Provider value={{ signed, setSigned }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { signed, setSigned } = useContext(AuthContext);
  return { signed, setSigned };
};
