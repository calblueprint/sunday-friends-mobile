import React, { useState, createContext } from 'react';

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
  const [userUID, setUserUID] = useState(null);

  return (
    <AuthenticatedUserContext.Provider>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};