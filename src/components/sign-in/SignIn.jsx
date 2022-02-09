import React, { Component } from "react";

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

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="sign-in-form-container md:w-1/2 w-full">
        <h2 className="sign-in-title text-4xl font-semibold mb-3">
          I already have an account
        </h2>
        <h4 className="sign-in-subtitle text-2xl font-semibold my-3">
          Enter your Email and Password to sign in
        </h4>
        <form onSubmit={this.handleSubmit} className="flex flex-col justify-center items-start space-y-2">
          <label className="text-xl font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="Enter Your Email"
            className="border-b text-xl w-full border-black"
          />
          <label className="text-xl font-semibold">Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Enter Your Passowrd"
            className="border-b text-xl w-full border-black"
          />
          <button className="py-3 px-5 w-1/2 bg-black text-white tetx-xl" type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}
