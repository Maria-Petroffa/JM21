import React from 'react';
import {
  Form, Input, Checkbox, Button,
} from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Label, FormHeader, FormFooter, FormTitle, Line,
} from './style';
import {
  newUserAddEmail,
  newUserAddUsername,
  newUserAddPassword,
  createUser,
} from '../../store/actions';

const SignUp = ({
  onChangeUsername,
  onChangePassword,
  onChangeEmail,
  currentUser,
  createNewUser,
}) => {
  if (currentUser !== 0) {
    return <Redirect to="/home" />;
  }

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { email, password, username } = values;
    const newUser = {
      user: {
        email,
        password,
        username,
      },
    };
    createNewUser(newUser);
  };

  const handleChange = (element) => {
    const { value, id } = element.target;
    if (id === 'email') {
      onChangeEmail(value);
    }
    if (id === 'password') {
      onChangePassword(value);
    }
    if (id === 'username') {
      onChangeUsername(value);
    }
  };

  return (
    <>
      <FormHeader>
        <FormTitle>Create new account</FormTitle>
      </FormHeader>
      <Form form={form} name="register" onFinish={onFinish} initialValues={{}}>
        <Label>Username</Label>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input onChange={handleChange} id="username" placeholder="Username" />
        </Form.Item>
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
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input
            onChange={handleChange}
            id="email"
            placeholder="Email address"
          />
        </Form.Item>
        <Label>Password</Label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              min: 8,
              message: 'Your password needs to be at least 8 characters',
            },
          ]}
          hasFeedback
        >
          <Input.Password
            onChange={handleChange}
            id="password"
            placeholder="Password"
          />
        </Form.Item>
        <Label>Repeat Password</Label>
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('Passwords must match');
              },
            }),
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Line />

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) => (value
                ? Promise.resolve()
                : Promise.reject('Should accept agreement')),
            },
          ]}
        >
          <Checkbox>
            I agree to the processing of my personal information
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
        <FormFooter>
          <FormTitle>
            Already have an account?
            {' '}
            <Link to="/signin">Sign In</Link>
          </FormTitle>
        </FormFooter>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => state;

const mapDispathToProps = (dispatch) => ({
  onChangeUsername: (value) => dispatch(newUserAddUsername(value)),
  onChangePassword: (value) => dispatch(newUserAddPassword(value)),
  onChangeEmail: (value) => dispatch(newUserAddEmail(value)),
  createNewUser: (value) => dispatch(createUser(value)()),
});

export default connect(mapStateToProps, mapDispathToProps)(SignUp);
