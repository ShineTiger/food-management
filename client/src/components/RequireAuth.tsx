import axios from 'axios';
import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router';
const TOKEN_KEY = 'token';

const RequireAuth = () => {
  const location = useLocation();
  const isLoginedd = (tokenKey: string) => {
    const tokenValue = localStorage.getItem(tokenKey);
    return tokenValue;
  };

  const isLogined = (isLoginedd: string | null) => {
    let loginResult;
    if (typeof isLoginedd === 'string' && isLoginedd.length > 0) {
      return loginResult;
    }
    return loginResult;
  };

  const navigateToLogin = () => {
    return (
      <>
        {alert('로그인 해주세요')}
        <Navigate to="/Login" />
      </>
    );
  };

  const isValidToken = () => {
    const userData = axios.post('/api/testSuccess', isLogined);
    return;
  };

  return (
    <>{isLogined(TOKEN_KEY) ? <Outlet /> : <Navigate to="/Login" replace />}</>
  );
};

export default RequireAuth;
