 import React, { Component } from 'react';
 import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";


class App extends Component{
state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: "",
  }

 componentDidMount() {
    if (localStorage.getItem("contacts")) {
      const contactsFromLS = JSON.parse(localStorage.getItem("contacts"));
      this.setState({
        contacts: [...contactsFromLS],
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

onHandlerSubmit = (contact) => {
    if (this.state.contacts.some((item) => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    if (this.state.contacts.some((item) => item.number === contact.number)) {
      alert(`Contact with number ${contact.number} is already in contacts`);
      return;
    }

    if (!contact.name.length) {
      alert("Please, enter a name");
      return;
    }
    if (!contact.number.length) {
      alert("Please, enter a number");
      return;
    }
    this.setState((prev) => {
      return {
        contacts: [...prev.contacts, contact],
      };
    });
  };

  deleteContactById = (e) => {
    const id = e.target.dataset.id;
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
    this.setState({ filter: "" });
  };

  onChangeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <h2>PhoneBook</h2>
        <ContactForm onHandlerSubmit={this.onHandlerSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.onChangeFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContactById={this.deleteContactById}
        />
      </>
    );
  }
}

export default App



