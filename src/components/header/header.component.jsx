import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebabse/firebase.utils";
import { ReactComponent as Logo } from "../../assets/Bikes2000..svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}
      <CartIcon />
      {hidden ? null : <CartDropdown />}
    </div>
  </div>
);

// this is a functions allows access the state --> reducer, which root reducer
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
