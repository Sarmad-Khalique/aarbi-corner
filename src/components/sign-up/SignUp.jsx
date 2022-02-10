import React, { Component } from "react";
import FormInput from "../form-input/FormInput";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password:"",
      confirmPassword:""
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ displayName: "", email: "", password:"", confirmPassword:"" });
  };
  render() {
    return (
      <div className="sign-up-form-container my-12 flex flex-col md:w-[30vw]">
        <h2 className="sign-up-title text-4xl font-semibold mb-3">
          I don't have an acount
        </h2>
        <h4 className="sign-in-subtitle text-2xl font-semibold pb-8">
          Sign up with your email and password
        </h4>
        <form onSubmit={this.handleSubmit} className="w-full">
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={this.state.displayName}
            label="Display Name"
          />
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
            label="Confirm Password"
          />
        </form>
      </div>
    );
  }
}
