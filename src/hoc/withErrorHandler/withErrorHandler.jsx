import React, { Component } from "react";
import Modal from "./../../components/modal/modal";
import Aux from "./../auxilary";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => {
          console.log(res);
          return res;
        },
        (err) => {
          console.log(err);
          this.setState({ error: err });
          throw err;
        }
      );
    }

    handleClosePopup = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} closePopup={this.handleClosePopup}>
            {this.state.error ? <p>Something went wrong!!!</p> : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
