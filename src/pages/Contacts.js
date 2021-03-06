import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact, deleteContact, searchContact } from "../redux/actions";
import shortid from "shortid";
import { Link } from "react-router-dom";

class Contacts extends Component {
  state = {
    name: "",
    phone: "",
    searchValue: ""
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };
  addNewContact = e => {
    e.preventDefault();
    this.props.addContact({
      name: this.state.name,
      phone: this.state.phone,
      id: shortid()
    });
    this.setState({
      name: "",
      phone: ""
    });
  };
  searchNewContact = e => {
    this.props.searchContact(e.target.value);
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const renderContacts =
      this.state.searchValue !== ""
        ? this.props.filteredContacts
        : this.props.contacts;
    const { name, phone } = this.state;

    return (
      <div>
        <Link to="/">Back to home page</Link>
        <h2>Contacts</h2>
        <form onSubmit={this.addNewContact}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            autoFocus
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            required
            value={phone}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h3>Filter</h3>
        <input
          type="search"
          placeholder="search name"
          name="search"
          onChange={this.searchNewContact}
          value={this.state.searchValue}
        />
        <h3>Contact List</h3>
        <ul>
          {renderContacts.map(contact => (
            <li key={contact.id}>
              <span>Name: {contact.name} </span>
              <span>Phone: {contact.phone} </span>

              <button
                type="button"
                onClick={() => this.props.deleteContact(contact.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("____>state", state);
  return {
    contacts: state.contacts,
    filteredContacts: state.filteredContact
  };
};
const mapDispatchToProps = {
  addContact,
  deleteContact,
  searchContact
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
