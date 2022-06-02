import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Header from "./Header";

describe("Given a Header Component", () => {
  const action = {
    type: "user/login",
    payload: {
      firstName: "test",
      email: "jesusperea@gmail.com",
      id: "6295020ad1504446d0c04ce8",
      iat: 1654177043,
    },
  };

  store.dispatch(action);

  describe("When its called to be rendered with a user logged in", () => {
    test("Then it should create a Header Component with 5 list components and an image", () => {
      const totalListComponents = 5;

      const totalImages = 1;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const displayImage = screen.getAllByRole("img");
      const displayHeader = screen.getAllByRole("listitem");

      expect(displayImage).toHaveLength(totalImages);
      expect(displayHeader).toHaveLength(totalListComponents);
    });
  });

  describe("When its called to be rendered with a user logged in the local storage and the user clicks in the logout button", () => {
    test("Then it should remove the token in the local storage", () => {
      const expectedLoggedStatus = false;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const signOutLink = screen.getByRole("link", {
        name: /sign out/i,
      });

      userEvent.click(signOutLink);

      const userStatusInStore = store.getState();

      expect(userStatusInStore.user.logged).toBe(expectedLoggedStatus);
    });
  });
});
