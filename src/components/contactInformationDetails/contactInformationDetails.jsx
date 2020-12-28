import React, { Component } from "react";
import Button from "./../../UI/button/button";
import classes from "./contactInformationDetails.module.css";

class ContactInformationDetails extends Component {
  state = {
    contactInfo: {
      name: "Rajesh",
      email: "rajeshgn821@gmail.com",
      address: {
        street: "Meander 545",
        postalNo: "1181 WN",
      },
    },
  };
  render() {
    return (
      <div className={classes.ContactInformationDetails}>
        <h4>Contact Information</h4>
        <form>
          <input
            type="text"
            className={classes.Input}
            placeholder="Enter the Name"
          />
          <input
            type="email"
            className={classes.Input}
            placeholder="Enter the Email"
          />
          <input
            type="text"
            className={classes.Input}
            placeholder="Enter the Address"
          />
          <input
            type="text"
            className={classes.Input}
            placeholder="Enter the PostalCode"
          />
          <Button
            btnType="Success"
            clicked={(event) => {
              event.preventDefault();
              this.props.handleOrderWithContactDetails(this.state.contactInfo);
            }}
          >
            Order
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactInformationDetails;
