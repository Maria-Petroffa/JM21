import { combineReducers } from 'redux';

const newUser = (state = 0, action) => {
  const {
    type, email, password, username,
  } = action;
  switch (type) {
    case 'ADD_EMAIL':
      return { ...state, email };
    case 'ADD_PASSWORD':
      return { ...state, password };
    case 'ADD_USERNAME':
      return { ...state, username };
    case 'CREATE_USER_SUCCESS':
      return 0;
    case 'CREATE_USER_FAILURE':
      return 0;
    default:
      return state;
  }
};

const authenticationUser = (state = {}, action) => {
  const { type, email, password } = action;
  switch (type) {
    case 'INPUT_EMAIL':
      return { ...state, email };
    case 'INPUT_PASSWORD':
      return { ...state, password };
    default:
      return state;
  }
};

const currentUser = (state = 0, action) => {
  const { type, value } = action;
  switch (type) {
    case 'LOGIN_USER':
      return value;
    case 'LOGOUT_USER':
      return 0;
    case 'CREATE_USER_SUCCESS':
      return value;
    default:
      return state;
  }
};

export default combineReducers({ newUser, authenticationUser, currentUser });
