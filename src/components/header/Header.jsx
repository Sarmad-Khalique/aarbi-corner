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

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }
  render() {
    return (
      <div className="header md:h-48 flex flex-col md:flex-row md:justify-between items-center px-7 py-10">
        <div className="logo-container flex items-center justify-between h-full md:w-48 w-full">
          <Link to="/">
            <Logo className="logo w-28 h-28 md:w-32 md:h-32" />
          </Link>
          <div
            className="md:hidden"
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
          <Link to="/shop" className="option px-3 py-4">
            SHOP
          </Link>
          <Link to="/shop" className="option px-3 py-4">
            CONTACT
          </Link>
          {this.props.currentUser ? (
            <div
              className="option px-3 py-4 hover:cursor-pointer"
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
          ) : (
            <Link to="/signin" className="option px-3 py-4">
              SIGN IN
            </Link>
          )}
          <div className="option px-3 py-4 hover:cursor-pointer">
            <CartIcon />
          </div>
        </div>
        {this.props.hidden ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartDisplay
});

export default connect(mapStateToProps)(Header);
