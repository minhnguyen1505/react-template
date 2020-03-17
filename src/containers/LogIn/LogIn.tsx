import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import { loginUserAction } from "../../store/actions/actionAuth";
import * as yup from "yup";
import logo from "../../assets/svg/logo.svg";
import "./LogIn.scss";

interface LoginProps {
  loginUserAction: Function;
  loginStore: any;
}
interface LoginState {
  accessToken: any;
  dataLogin?: any;
  username: string;
  password: string;
  loginErrors: any;
}

class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      accessToken: "",
      username: "",
      password: "",
      loginErrors: {}
    };
  }

  handleChangeInput = ({ name, value, error }: any) => {
    const dataLogin = { ...this.state.dataLogin };
    const loginErrors = { ...this.state.loginErrors };

    dataLogin[name] = value;
    loginErrors[name] = error;

    this.setState({ dataLogin, loginErrors });
  };

  isValidate() {
    const { dataLogin, loginErrors } = this.state;
    const errMessages = Object.keys(loginErrors).filter(k => loginErrors[k]);
    if (!dataLogin.username) return false;
    if (!dataLogin.password) return false;
    if (errMessages.length) return false;
    return true;
  }

  handleSubmit = (values: any) => {
    const { loginUserAction } = this.props;
    loginUserAction(values);
  };

  render() {
    const { loginStore } = this.props;
    // const { dataLogin } = this.state;
    const validationSchema = yup.object().shape({
      username: yup
        .string()
        .label("Username")
        .required("The username field is required."),
      password: yup
        .string()
        .label("Password")
        .required("The password field is required.")
        .min(4, "Password must have at least 4 characters")
    });

    if (
      loginStore.hasOwnProperty("response") &&
      loginStore.response !== undefined
    ) {
      const login = loginStore.response;
      if (login.success) {
        console.log("success", login);
        window.location.pathname = "home";
      } else {
        const message = login;
        console.log("messageError", message);
      }
    }

    return (
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={values => this.handleSubmit(values)}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          touched,
          handleBlur
        }) => (
          <Form className="signin" onSubmit={handleSubmit}>
            <div className="card signin__card">
              <div className="signin__wrapper">
                <Link to="/" className="brand">
                  <div className="logo">
                    <img src={logo} alt="Logo" width="80" height="80" />
                  </div>
                </Link>
                <h5 className="heading">Sign in to your account</h5>
                <Form.Item
                  hasFeedback={!!errors.username}
                  validateStatus={errors.username && "error"}
                  help={errors.username}
                >
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange("username")}
                    onBlur={handleBlur("username")}
                  />
                </Form.Item>
                <Form.Item
                  hasFeedback={!!errors.password}
                  validateStatus={errors.password && "error"}
                  help={errors.password}
                >
                  <Input.Password
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                </Form.Item>

                <Form.Item>
                  <Checkbox>Remember me</Checkbox>
                  <a className="float-right" href="">
                    Forgot password
                  </a>
                  <Button type="primary" htmlType="submit" className="w-100">
                    Sign in
                  </Button>
                </Form.Item>
                <p className="text-muted">
                  Don't have an account?
                  <Link to="signup"> Create an account</Link>
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state: any) => ({
  loginStore: state.login
});

export default connect(mapStateToProps, { loginUserAction })(Login);
