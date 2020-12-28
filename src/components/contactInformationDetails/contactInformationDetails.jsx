import React, { Component } from "react";
import Input from "../../UI/Input/input";
import Button from "./../../UI/button/button";
import classes from "./contactInformationDetails.module.css";

class ContactInformationDetails extends Component {
  state = {
    contactFormInfo: {
      name: {
        elementtype: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Name",
        },
        value: "",
      },
      email: {
        elementtype: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter Email",
        },
        value: "",
      },
      street: {
        elementtype: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Street name",
        },
        value: "",
      },
      postalAddress: {
        elementtype: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Zipcode",
        },
        value: "",
      },
      deliveryType: {
        elementtype: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "fastest",
      },
    },
    /* contactInfo: {
      name: "Rajesh",
      email: "rajeshgn821@gmail.com",
      address: {
        street: "Meander 545",
        postalNo: "1181 WN",
      },
    }, */
  };

  handlechange = (event, key) => {
    const updatedFormState = { ...this.state.contactFormInfo };
    const elementToUpdate = { ...updatedFormState[key] };
    elementToUpdate["value"] = event.target.value;
    updatedFormState[key] = elementToUpdate;
    this.setState({ contactFormInfo: updatedFormState });
  };

  handleSubmit = () => {
    const contactInfo = {};
    Object.keys(this.state.contactFormInfo).map(
      (key) => (contactInfo[key] = this.state.contactFormInfo[key].value)
    );
    this.props.handleOrderWithContactDetails(contactInfo);
  };

  render() {
    return (
      <div className={classes.ContactInformationDetails}>
        <h4>Contact Information</h4>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.handleSubmit();
          }}
        >
          {Object.keys(this.state.contactFormInfo).map((key) => (
            <Input
              key={key}
              value={this.state.contactFormInfo[key].value}
              elementtype={this.state.contactFormInfo[key].elementtype}
              changed={(event) => this.handlechange(event, key)}
              {...this.state.contactFormInfo[key].elementConfig}
            />
          ))}
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactInformationDetails;
