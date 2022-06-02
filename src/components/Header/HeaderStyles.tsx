import styled from "styled-components";

const StyledHeader = styled.header`
  .top-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 1.2em;
    position: relative;
    z-index: 50;
  }

  .top-nav_img img {
    margin-top: 40px;
    width: 200px;
  }
  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 50;
  }

  .menu > li {
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
    color: #000;
    font-weight: bolder;
    font-size: 20px;
  }

  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: #000;
    position: absolute;
    height: 5px;
    width: 40px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: "";
    margin-top: -10px;
  }

  .menu-button::after {
    content: "";
    margin-top: 10px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  @media (max-width: 700px) {
    .menu-button-container {
      display: flex;
    }
    .menu {
      position: absolute;
      top: -1000px;
      margin-top: 100px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    #menu-toggle:checked ~ .menu {
      top: 0;
    }
    #menu-toggle ~ .menu li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle:checked ~ .menu li {
      border: 0.25px solid #333;
      height: 5.5em;
      padding: 0.5em;
      align-items: center;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu > li {
      display: flex;
      height: 100vh;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: #000;
      background-color: #fff;
    }
    .menu > li:not(:last-child) {
      border-bottom: 0.25px solid #444;
    }
  }
`;

export default StyledHeader;
