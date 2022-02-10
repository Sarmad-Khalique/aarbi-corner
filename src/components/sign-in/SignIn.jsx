import React, { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import {ReactComponent as GoogleLogo} from  "../../assets/google.svg"

import { signInWithGoogle } from "../../firebase/firebase.utils";

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
    console.log(name, value);
    console.log({ [name]: value });

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="sign-in-form-container flex flex-col md:w-[30vw]">
        <h2 className="sign-in-title text-4xl font-semibold mb-3 my-2">
          I already have an account
        </h2>
        <h4 className="sign-in-subtitle text-2xl font-semibold pb-8">
          Sign in with your email and password
        </h4>
        <form onSubmit={this.handleSubmit} className="w-full">
          <FormInput
            type="email"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle}>
              <span className="google-sign-in-container">
                <GoogleLogo className="flex w-full justify-center items-center"/>
              </span>
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
