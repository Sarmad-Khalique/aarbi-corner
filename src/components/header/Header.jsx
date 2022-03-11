import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";

import CartDropdown from "../cart-dropdown/CartDropdown";
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

import { signOutStart } from "../../redux/user/user.actions";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartDisplay);

  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <LogoImage />
        </Link>
        <HamContainer onClick={() => setMenuOpen(!menuOpen)}>
          <Line />
          <Line />
          <Line />
        </HamContainer>
      </LogoContainer>
      <OptionsContainer
        menuOpen={menuOpen}
        className={`${menuOpen ? "options-open" : ""}`}
      >
        <LinkOption onClick={() => setMenuOpen(!menuOpen)} to="/shop">
          SHOP
        </LinkOption>
        <LinkOption onClick={() => setMenuOpen(!menuOpen)} to="/shop">
          CONTACT
        </LinkOption>
        {currentUser ? (
          <LinkOption as="div" onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </LinkOption>
        ) : (
          <LinkOption onClick={() => setMenuOpen(!menuOpen)} to="/signin">
            SIGN IN
          </LinkOption>
        )}
        <LinkOption as="div" onClick={() => setMenuOpen(!menuOpen)}>
          <CartIcon />
        </LinkOption>
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
