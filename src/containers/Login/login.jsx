import React, { Component } from "react";
import classes from "./login.module.css";
import CustomInput from "../../UI/customInput/customInput";
import Button from "./../../UI/button/button";

class Login extends Component {
  state = {
    controls: {
      email: {
        elementtype: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter emailId",
        },
        value: "",
      },
      password: {
        elementtype: "input",
        elementConfig: {
          type: "password",
          placeholder: "Enter Password",
        },
        value: "",
      },
    },
  };

  changeHandler = (event, name) => {
    this.setState({
      ...this.state,
      controls: {
        ...this.state.controls,
        [name]: {
          ...this.state.controls[name],
          value: event.target.value,
        },
      },
    });
  };

  formSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  handleLogin = () => {};
  render() {
    return (
      <div className={classes.Login}>
        <h2>Login to Access</h2>
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

export default Login;
