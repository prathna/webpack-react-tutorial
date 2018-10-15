import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";

class FormCon extends Component {
  constructor() {
    super();

    this.state = {
       _title: "Title"
    };

    this.handleChange = this.handleChange.bind(this);
    console.log("App is started...");
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { _title } = this.state;
    return ( 
      <form id="form">
        <Input
            text="Title"
            label="title"
            type="text"
            id="title"
            value={_title}
            handleChange={this.handleChange}
        />
      </form>
    );
  }
}

export default FormCon; 

const wrapper = document.getElementById("create-form");
wrapper ? ReactDOM.render(<FormCon />, wrapper) : false;