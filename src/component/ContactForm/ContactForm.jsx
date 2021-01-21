 import React, { Component } from "react";
 import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onHandlerSubmit({ ...this.state, id: uuidv4() });
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form  onSubmit={this.onHandleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Number
            <input
              type="text"
              value={number}
              name="number"
              onChange={this.onHandleChange}
            />
          </label>
          <button type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
