import React, { Component } from "react";
import classes from "./login.module.css";
import CustomInput from "../../UI/customInput/customInput";
import Button from "./../../UI/button/button";
import { connect } from "react-redux";
import * as ActionTypes from "./../../store/actions/index";

class Login extends Component {
  state = {
    controls: {
      email: {
        elementtype: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter emailId",
        },
        validation: {
          required: true,
        },
        isvalid: false,
        value: "",
      },
      password: {
        elementtype: "input",
        elementConfig: {
          type: "password",
          placeholder: "Enter Password",
        },
        validation: {
          required: true,
          minLength: 6,
        },
        isvalid: false,
        value: "",
      },
    },
  };

  checkValidity = (value, rule) => {
    let isValid = true;
    if (rule.required) {
      isValid = value.trim() != "" && isValid;
    }
    if (rule.minLength) {
      isValid = value.length > rule.minLength;
    }
    return isValid;
  };

  changeHandler = (event, name) => {
    const updatedControls = { ...this.state.controls };
    const updateControlsField = { ...updatedControls[name] };
    updateControlsField.value = event.target.value;
    updateControlsField.isvalid = this.checkValidity(
      updateControlsField.value,
      updateControlsField.validation
    );
    updatedControls[name] = updateControlsField;
    this.setState({ controls: updatedControls });
  };

  formSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  handleLogin = () => {
    const loginDetails = {
      email: this.state.controls["email"].value,
      password: this.state.controls["password"].value,
      returnSecureToken: true,
    };
    this.props.login(loginDetails);
  };
  render() {
    return (
      <div className={classes.Login}>
        <h2>Login to Access</h2>
        {this.props.error}
        <form onSubmit={(event) => this.formSubmit(event)}>
          {Object.keys(this.state.controls).map((el) => {
            return (
              <CustomInput
                key={el}
                elementtype={this.state.controls[el].elementtype}
                name={el}
                value={this.state.controls[el].value}
                type={this.state.controls[el].elementConfig.type}
                placeholder={this.state.controls[el].elementConfig.placeholder}
                isvalid={this.state.controls[el].isvalid}
                onChange={(eventVal, inputElementName) =>
                  this.changeHandler(eventVal, inputElementName)
                }
              />
            );
          })}
          <Button btnType="Success" clicked={this.handleLogin}>
            Login
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    idToken: state.login.idToken,
    loading: state.login.loading,
    error: state.login.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginDetails) => dispatch(ActionTypes.login(loginDetails)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
