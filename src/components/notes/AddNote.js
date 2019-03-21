import React, { Component } from "react";
// import "./Animal.css";

export default class AddNote extends Component {
  // Set initial state
  state = {
    note: "",
    userId: this.props.activeUser
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewNote = evt => {
    evt.preventDefault();
    if (this.state.note === "") {
      window.alert("Cannot leave blank");
    } else {
      const note = {
        name: this.state.note,
        // userId: parseInt(this.state.userId)

      };

      // Create the animal and redirect user to animal list
      this.props
        .addNote(note)
      this.props.history.push("/notes");
    }
  };

  render() {

    return (
      <React.Fragment>

        <form className="noteForm">
          <div className="form-group">
            <label htmlFor="Note">Note</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="note"
              placeholder="New Note"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewNote}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

