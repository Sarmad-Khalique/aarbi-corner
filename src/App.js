import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SignInandSignUpPage from "./pages/SignInandSignUpPage/SignInandSignUpPage";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser:null,
    }

  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      (user)=>{
        this.setState({currentUser:user})

        console.log(user)
      }
    )
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
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
