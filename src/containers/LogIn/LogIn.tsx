import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Field from "../../components/FormInput/Field";
import ErrorMessage from "../../components/FormInput/ErrorMessage";
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
    // const dataClone = { ...this.state.dataLogin };
    // const dataElement = { ...dataClone[id] };
    // dataElement.value = event.target.value;
    // dataElement.valid = utils.utilsValidation(
    //   dataElement.value,
    //   dataElement.validation
    // );
    // dataElement.touched = true;
    // dataClone[id] = dataElement;
    // this.setState({ dataLogin: dataClone });
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
    console.log("data", values);
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
          isSubmitting,
          touched,
          handleBlur
        }) => (
          <form className="signin" onSubmit={handleSubmit}>
            <div className="card signin__card">
              <div className="signin__wrapper">
                <Link to="/" className="brand">
                  <div className="logo">
                    <img src={logo} alt="Logo" width="80" height="80" />
                  </div>
                </Link>
                <h5 className="heading">Sign in to your account</h5>
                <Field
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange("username")}
                  onBlur={handleBlur("username")}
                />
                {touched.username && errors.username ? (
                  <ErrorMessage>{errors.username}</ErrorMessage>
                ) : null}
                <Field
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                {touched.password && errors.password ? (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                ) : null}
                <div className="checkbox">
                  <div className="form-check custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="stateCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="stateCheck1"
                    >
                      {" "}
                      Remember me
                    </label>
                  </div>
                  <a href="auth.forgot-password.html" className="float-right">
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn btn--primary btn--full btn-login"
                >
                  Sign In
                </button>
                <p className="text-muted">
                  Don't have an account yet?
                  <Link to="signup"> Create an account</Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state: any) => ({
  loginStore: state.login
});

export default connect(mapStateToProps, { loginUserAction })(Login);
