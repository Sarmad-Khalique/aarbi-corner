import React, {Component} from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

class Header extends Component {
  constructor(){
    super();
    this.state = {
      menuOpen:false
    }
  }
  render() {
    return (
      <div className="header md:h-48 flex flex-col md:flex-row md:justify-between items-center px-5 pt-10">
        <Link
          className="logo-container flex items-center justify-between h-full md:w-48 w-full"
          to="/"
        >
          <Logo className="logo w-28 h-28 md:w-48 md:h-48" />
          <div className="md:hidden" onClick={()=>this.setState({menuOpen:!this.state.menuOpen})}>ham</div>
        </Link>
        <div className={`options ${this.state.menuOpen?" flex":"hidden"} flex-col text-2xl font-bold md:flex md:flex-row`}>
          <Link to="/shop" className="option px-3 py-4">
            SHOP
          </Link>
          <Link to="/shop" className="option px-3 py-4">
            CONTACT
          </Link>
          <Link to="/shop" className="option px-3 py-4">
            SIGN IN
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
