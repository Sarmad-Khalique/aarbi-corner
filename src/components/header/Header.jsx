import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Ham } from "../../assets/ham.svg";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartDisplay } from "../../redux/cart/cart.selectors";

import "./Header.styles.css"

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }
  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
          <div
            className="ham"
            onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
          >
            <Ham />
          </div>
        </div>
        <div
          className={`options ${
            this.state.menuOpen ? "flex" : "hidden"
          } flex-col text-2xl font-bold md:flex md:flex-row`}
        >
          <Link to="/shop" className="option">
            SHOP
          </Link>
          <Link to="/shop" className="option">
            CONTACT
          </Link>
          {this.props.currentUser ? (
            <div
              className="option hover:cursor-pointer"
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
          ) : (
            <Link to="/signin" className="option">
              SIGN IN
            </Link>
          )}
          <div className="option hover:cursor-pointer">
            <CartIcon />
          </div>
        </div>
        {this.props.hidden ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartDisplay,
});

export default connect(mapStateToProps)(Header);
