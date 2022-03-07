import { useState } from "react";
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

const Header = ({currentUser, hidden}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <LogoImage />
        </Link>
        <HamContainer
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Line />
          <Line />
          <Line />
        </HamContainer>
      </LogoContainer>
      <OptionsContainer
        menuOpen={menuOpen}
        className={`${menuOpen ? "options-open" : ""}`}
      >
        <LinkOption
          onClick={() => setMenuOpen(!menuOpen)}
          to="/shop"
        >
          SHOP
        </LinkOption>
        <LinkOption
          onClick={() => setMenuOpen(!menuOpen)}
          to="/shop"
        >
          CONTACT
        </LinkOption>
        {currentUser ? (
          <LinkOption as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </LinkOption>
        ) : (
          <LinkOption
            onClick={() => setMenuOpen(!menuOpen)}
            to="/signin"
          >
            SIGN IN
          </LinkOption>
        )}
        <LinkOption as="div">
          <CartIcon />
        </LinkOption>
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartDisplay,
});

export default connect(mapStateToProps)(Header);
