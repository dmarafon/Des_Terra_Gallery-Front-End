import { SyntheticEvent } from "react";
import { NavLink } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import HeaderStyled from "./HeaderStyled";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    htmlFor?: string;
  }
}

const Header = (): JSX.Element => {
  const userData = useAppSelector((state) => state.user);
  const loading = useAppSelector((state) => state.ui.loading);

  const dispatch = useAppDispatch();

  const submitLogOut = (event: SyntheticEvent) => {
    event.preventDefault();

    localStorage.removeItem("token");

    dispatch(logoutActionCreator());
  };

  return (
    <HeaderStyled>
      <div className={`navigation__container--${loading ? "yellow" : "white"}`}>
        <nav className="top-nav">
          <div className="top-nav_img">
            <NavLink to={loading ? "/" : "/home"}>
              {loading ? (
                <img src="/images/desterra_logo_alt.png" alt="Desterra logo" />
              ) : (
                <img
                  src="/images/desterra_logo.png"
                  alt="Desterra logo in orange"
                />
              )}
            </NavLink>
          </div>
          <input id="menu-toggle" type="checkbox" htmlFor="menu-toggle" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          {!loading && (
            <ul className="menu">
              {userData.logged ? (
                <li>
                  <NavLink to={"/myart"}>
                    <span className="menu__text--color">My</span> Art
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              <li>
                <NavLink to={"/about"}>Why Desterra?</NavLink>
              </li>
              <li>
                <NavLink to="/artwork">Artwork</NavLink>
              </li>
              {userData.logged ? (
                <li onClick={submitLogOut}>
                  <NavLink to={"/home"}>Sign Out</NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to={"/users/register"}>Register</NavLink>
                </li>
              )}
              {userData.logged ? (
                <li className="menu__logged">
                  <NavLink to={"/users/profile"}>
                    <div className="menu__link--userprofile">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className="menu__svg--userlogo"
                      >
                        <path d="M223.1 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 223.1 256zM274.7 304H173.3C77.61 304 0 381.7 0 477.4C0 496.5 15.52 512 34.66 512h286.4c-1.246-5.531-1.43-11.31-.2832-17.04l14.28-71.41c1.943-9.723 6.676-18.56 13.68-25.56l45.72-45.72C363.3 322.4 321.2 304 274.7 304zM371.4 420.6c-2.514 2.512-4.227 5.715-4.924 9.203l-14.28 71.41c-1.258 6.289 4.293 11.84 10.59 10.59l71.42-14.29c3.482-.6992 6.682-2.406 9.195-4.922l125.3-125.3l-72.01-72.01L371.4 420.6zM629.5 255.7l-21.1-21.11c-14.06-14.06-36.85-14.06-50.91 0l-38.13 38.14l72.01 72.01l38.13-38.13C643.5 292.5 643.5 269.7 629.5 255.7z" />
                      </svg>
                      <div>
                        Welcome
                        <p className="menu__text--firstname">
                          {userData.firstName}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to={"/users/login"}>Sign In</NavLink>
                </li>
              )}
            </ul>
          )}
        </nav>
      </div>
    </HeaderStyled>
  );
};

export default Header;
