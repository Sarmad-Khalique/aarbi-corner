import React, { Component } from "react";
import FormInput from "../form-input/FormInput";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    console.log({[name]:value})

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="sign-in-form-container">
        <h2 className="sign-in-title text-4xl font-semibold mb-3">
          I already have an account
        </h2>
        <h4 className="sign-in-subtitle text-2xl font-semibold pb-8">
          Enter your Email and Password to sign in
        </h4>
        <form onSubmit={this.handleSubmit} className="md:w-[30%] w-full">
          <FormInput
            type="email"
            label="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
            className="border-b text-xl w-full border-black"
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            label="Password"
            className="border-b text-xl w-full border-black"
          />
        </form>
      </div>
    );
  }
}
