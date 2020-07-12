import React from 'react';

import { Form, Input, Button } from 'antd';

import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import {
  Label, FormHeader, FormFooter, FormTitle,
} from './style';
import {
  singInInputEmail,
  singInInputPassword,
  authentification,
} from '../../store/actions';

const SignIn = ({
  onChangeEmail,
  onChangePassword,
  logInUser,
  currentUser,
}) => {
  if (currentUser !== 0) {
    return <Redirect to="/home" />;
  }

  const onFinish = (values) => {
    const { email, password } = values;
    const user = {
      user: {
        email,
        password,
      },
    };

    logInUser(user);
  };

  const handleChange = (element) => {
    const { value, id } = element.target;
    if (id === 'email') {
      onChangeEmail(value);
    }
    if (id === 'password') {
      onChangePassword(value);
    }
  };

  return (
    <>
      <FormHeader>
        <FormTitle>Sign In</FormTitle>
      </FormHeader>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Label>Email address</Label>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            id="email"
            placeholder="Email address"
            onChange={handleChange}
          />
        </Form.Item>
        <Label>Password</Label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Login
          </Button>
          <FormFooter>
            <FormTitle>
              Don’t have an account?
              {' '}
              <Link to="/signup">Sign Un</Link>
            </FormTitle>
          </FormFooter>
        </Form.Item>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => state;

const mapDispathToProps = (dispatch) => ({
  onChangeEmail: (value) => dispatch(singInInputEmail(value)),
  onChangePassword: (value) => dispatch(singInInputPassword(value)),
  logInUser: (value) => dispatch(authentification(value)()),
});

export default connect(mapStateToProps, mapDispathToProps)(SignIn);
