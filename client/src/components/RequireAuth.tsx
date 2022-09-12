import axios from 'axios';
import React from 'react';
import { Navigate, Outlet } from 'react-router';

const RequireAuth = () => {
  const TOKEN_KEY = 'token';

  const getTokenValue = (tokenKey: string) => {
    const tokenValue = localStorage.getItem(tokenKey);
    return tokenValue;
  };

  const isLogined = (getTokenValue: string | null) => {
    if (typeof getTokenValue === 'string' && getTokenValue.length > 0) {
      const userData = axios.post('/api/testSuccess');
      return userData;
    }
  };

  return (
    <>
      {isLogined(getTokenValue(TOKEN_KEY)) ? (
        <Outlet />
      ) : (
        <Navigate to="/Login" replace={true} />
      )}
    </>
  );
};

export default RequireAuth;
