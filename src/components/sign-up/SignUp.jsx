import React, { Component, useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import {
  FormContainer,
  SubtitleContainer,
  TitleContainer,
  SignInContainer,
} from "../sign-in/SignIn.styles";
import { ButtonContainer } from "./SignUp.styles";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ [name]: value });
  };

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password's don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });

      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("An error occoured:", error);
    }

    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <SignInContainer>
      <TitleContainer>I don't have an acount</TitleContainer>
      <SubtitleContainer>
        Sign up with your email and password
      </SubtitleContainer>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          label="Display Name"
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          label="Confirm Password"
        />
        <ButtonContainer>
          <CustomButton type="submit">Sign up</CustomButton>
        </ButtonContainer>
      </FormContainer>
    </SignInContainer>
  );
};

export default SignUp;
