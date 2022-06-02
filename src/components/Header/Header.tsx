import { NavLink } from "react-router-dom";
import StyledHeader from "./HeaderStyles";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    htmlFor?: string;
  }
}

const Header = () => {
  return (
    <StyledHeader>
      <nav className="top-nav">
        <div className="top-nav_img">
          <NavLink to="/home">
            <img src="/images/desterra_logo.png" alt="Desterra logo" />
          </NavLink>
        </div>
        <input id="menu-toggle" type="checkbox" htmlFor="menu-toggle" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <NavLink to="/about">Why Desterra?</NavLink>
          </li>
          <li>
            <NavLink to="/artwork">Artwork</NavLink>
          </li>
          <li>
            <NavLink to="/users/Register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/users/login">Sign In</NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
