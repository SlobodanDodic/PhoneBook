import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      contacts: [],
    };
  }

  addContact = () => {
    const newContact = {
      name: this.state.name,
      number: this.state.number,
    };

    if (this.state.name === "" || this.state.number === "") {
      alert("Both fields are required.");
      return;
    }
    const allContacts = this.state.contacts.concat(newContact);
    this.setState({
      contacts: allContacts,
      name: "",
      number: "",
    });

    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  deleteItem(index) {
    this.state.contacts.splice(index, 1);
    this.setState({ contacts: this.state.contacts });
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");

    if (contacts !== null) {
      this.setState({ contacts: JSON.parse(contacts) });
    } else {
      return contacts;
    }
  }

  render() {
    const form = (
      <div className="container">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={(e) => this.setState({ name: e.target.value })}
            value={this.state.name}
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            onChange={(e) => this.setState({ number: e.target.value })}
            value={this.state.number}
            placeholder="Enter your phone number"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-add-contact mt-1 mb-3"
          onClick={this.addContact}
        >
          Add new contact
        </button>
        <hr className="add-contact-line" />
      </div>
    );

    return (
      <div className="container">
        <div className="App">
          <h1 className="header mb-4">React PhoneBook:</h1>

          {form}

          {this.state.contacts.map((contact, index) => (
            <div className="grid-container" key={index}>
              <div>
                <span className="font-weight-bold">{contact.name}</span>
                <br />
                <span className="font-italic">{contact.number}</span>
              </div>
              <div>
                <button
                  className="btn-delete"
                  onClick={() => this.deleteItem(index)}
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-trash"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
