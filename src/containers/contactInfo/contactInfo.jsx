import React, { Component } from "react";
import ContactInformationDetails from "./../../components/contactInformationDetails/contactInformationDetails";
import axios from "./../../axios-order";
import withErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";

class ContactInfo extends Component {
  handleOrder = (contactInfo) => {
    axios
      .post("/order.json", {
        order: this.props.ingredients,
        contactInfo,
        price: this.props.price,
      })
      .then((res) => {
        console.log("iam inside the response block");
        this.props.history.replace("/");
      })
      .catch((error) => console.log("Error" + error));
  };

  render() {
    return (
      <ContactInformationDetails
        handleOrderWithContactDetails={(contactInfo) => {
          this.handleOrder(contactInfo);
        }}
      />
    );
  }
}

export default withErrorHandler(ContactInfo, axios);
