import { useState } from "react";
import { connect } from "react-redux";
import { googleSignInStart } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import {
  ButtonGroup,
  FormContainer,
  SignInContainer,
  SubtitleContainer,
  TitleContainer,
} from "./SignIn.styles";

const SignIn = ({ googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUserCredentials({ email: "", password: "" });
    } catch (error) {
      console.log("Error Occoured: ", error);
    }
  };

  const { email, password } = userCredentials;

  return (
    <SignInContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <SubtitleContainer>
        Sign in with your email and password
      </SubtitleContainer>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          label="Password"
        />
        <ButtonGroup>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            Google Sign In
          </CustomButton>
        </ButtonGroup>
      </FormContainer>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
