import React, { Component } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";

import CartDropdown from "../cart-dropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartDisplay } from "../../redux/cart/cart.selectors";

import {
  HamContainer,
  HeaderContainer,
  LogoContainer,
  LogoImage,
  OptionsContainer,
  LinkOption,
  Line,
} from "./Header.styles";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }
  render() {
    return (
      <HeaderContainer>
        <LogoContainer>
          <Link to="/">
            <LogoImage />
          </Link>
          <HamContainer
            onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
          >
            <Line />
            <Line />
            <Line />
          </HamContainer>
        </LogoContainer>
        <OptionsContainer
          menuOpen={this.state.menuOpen}
          className={`${this.state.menuOpen ? "options-open" : ""}`}
        >
          <LinkOption
            onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
            to="/shop"
          >
            SHOP
          </LinkOption>
          <LinkOption
            onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
            to="/shop"
          >
            CONTACT
          </LinkOption>
          {this.props.currentUser ? (
            <LinkOption as="div" onClick={() => auth.signOut()}>
              SIGN OUT
            </LinkOption>
          ) : (
            <LinkOption onClick={() => this.setState({ menuOpen: !this.state.menuOpen })} to="/signin">SIGN IN</LinkOption>
          )}
          <LinkOption as="div">
            <CartIcon />
          </LinkOption>
        </OptionsContainer>
        {this.props.hidden ? null : <CartDropdown />}
      </HeaderContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartDisplay,
});

export default connect(mapStateToProps)(Header);
