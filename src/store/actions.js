import axios from 'axios';
import { registrationUser, authenticationUser } from '../services/path';

export const newUserAddEmail = (email = '') => ({ type: 'ADD_EMAIL', email });

export const newUserAddPassword = (password = '') => ({
  type: 'ADD_PASSWORD',
  password,
});

export const newUserAddUsername = (username = '') => ({
  type: 'ADD_USERNAME',
  username,
});

export const singInInputEmail = (email = '') => ({
  type: 'INPUT_EMAIL',
  email,
});

export const singInInputPassword = (password = '') => ({
  type: 'INPUT_PASSWORD',
  password,
});

export const logInUser = (value) => ({ type: 'LOGIN_USER', value });
export const logOutUser = () => ({ type: 'LOGOUT_USER' });

export const createUserSuccess = (value) => ({
  type: 'CREATE_USER_SUCCESS',
  value,
});
export const createUserFailure = (value) => ({
  type: 'CREATE_USER_FAILURE',
  value,
});

export const createUser = (value) => () => (dispatch) => {
  axios
    .post(registrationUser, value)
    .then((response) => {
      dispatch(createUserSuccess(response.data));
    })
    .catch((error) => {
      const { email, username } = error.response.data.errors;
      const errorEmailMessage = email ? `Email ${email}` : '';
      const errorUsernameMessage = username ? `Username ${username}` : '';
      const errorMessage = `${errorEmailMessage} ${errorUsernameMessage}`;
      alert(errorMessage);
    });
};

export const authentification = (values) => () => (dispatch) => {
  axios
    .post(authenticationUser, values)
    .then((response) => {
      dispatch(logInUser(response.data));
    })
    .catch((error) => {
      const resp = error.response.data.errors['email or password'];
      const errorMessage = `Email or password ${resp}`;
      alert(errorMessage);
    });
};
