import { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import {
  ButtonGroup,
  FormContainer,
  SignInContainer,
  SubtitleContainer,
  TitleContainer,
} from "./SignIn.styles";

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

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = this.state;
      await auth.signInWithEmailAndPassword(email.trim(), password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("Error Occoured: ", error);
    }
  };
  render() {
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <SubtitleContainer>
          Sign in with your email and password
        </SubtitleContainer>
        <FormContainer onSubmit={this.handleSubmit}>
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
          <ButtonGroup>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Google Sign In
            </CustomButton>
          </ButtonGroup>
        </FormContainer>
      </SignInContainer>
    );
  }
}
