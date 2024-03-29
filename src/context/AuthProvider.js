import React, { useState } from 'react';
import Cookies from 'js-cookie';
export const AuthContext = React.createContext();

const fakeUserData = {
  id: 1,
  name: 'Jhon Doe',
  avatar: '',
  roles: ['USER', 'ADMIN'],
};

/**
 * We have used Fake JWT token from "jwt.io"
 * This is a sample token to show auth is working
 * Your token will come from your server when user successfully loggedIn.
 */

const fakeToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoidGFyZXEgam9iYXllcmUiLCJyb2xlcyI6ImFkbWluIn0.k74_B-zeWket405dIAt018mnQFMh_6_BTFpjB77HtRQ';

const addItem = (key, value = '') => {
  /**
   *  Using the local storage code....
   */
  // if (key) localStorage.setItem(key, value);

  /**
   *  Using the Cookies code...
   */
  if (key) Cookies.set(key, value, { expires: 7 });
};

const clearItem = key => {
  /**
   *  Using the local storage code....
   */
  // localStorage.removeItem(key);

  /**
   *  Using the Cookies code...
   */
  Cookies.remove(key);
};

const isValidToken = () => {
  /**
   *  Using the local storage code....
   */
  // const token = localStorage.getItem('token');

  /**
   *  Using the Cookies code...
   */
  const token = Cookies.get('token');
  // JWT decode & check token validity & expiration.
  if (token) return true;
  return false;
};

const AuthProvider = props => {
  const [loggedIn, setLoggedIn] = useState(isValidToken());
  // const [loggedOut, setLoggedOut] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const signIn = (props) => {
    /**
     * Make post request here to authenticate with fetch
     * if returns true then change the state
     */
    console.log(props, 'sign in form Props');
    setUser(props.user);
    setToken(props.refresh);
    addItem('user', props.user);
    addItem('token', props.refresh);
    setLoggedIn(true);
  };
  const signUp = params => {
    console.log(params, 'sign up form Props');
    setUser(fakeUserData);
    setToken(fakeToken);
    addItem('token', fakeToken);
    setLoggedIn(true);
  };

  /**
   * For 3rd-party Authentication [e.g. Autho0, firebase, AWS etc]
   *
   */
  const tokenAuth = (token, user = {}) => {
    setUser(user);
    setToken(token);
    addItem('token', token);
    setLoggedIn(true);
  };

  const forgetPass = params => {
    console.log(params, 'forget password form Props');
  };
  const changePass = params => {
    console.log(params, 'change password form Props');
  };

  const logOut = () => {
    setUser(null);
    setToken(null);
    clearItem('user');
    clearItem('token');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        signIn,
        signUp,
        forgetPass,
        changePass,
        tokenAuth,
        user,
        token,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
