import { createState, useState } from "@hookstate/core";

const initialState = {
  isLoggedIn: false,
  me: {},
};

const authState = createState(initialState);

export const login = (username, password) => {
  // do network call to post login data
  // eg: axios.post()

  // fake login
  if (username === "user" && password === "password") {
    authState.set({
      ...initialState,
      // update me with data from network call
      me: { name: username },
      isLoggedIn: true,
    });
  }
};

export const logout = () => {
  // set authState to initial state
  authState.set(initialState);
};

// create react hook for consuming
export const useAuthState = () => {
  return useState(authState);
};
