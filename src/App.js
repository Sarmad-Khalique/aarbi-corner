import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SignInandSignUpPage from "./pages/SignInandSignUpPage/SignInandSignUpPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const userRef = await createUserProfileDocument(userAuth);

      //setting state if the user is logged in
      if (userAuth) {
        //onSnapshot checks if the snapshot has updated, using it here to get the copy of the snapshot as the snapshot will never change because we are not updating it
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
        } else {
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignInandSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
