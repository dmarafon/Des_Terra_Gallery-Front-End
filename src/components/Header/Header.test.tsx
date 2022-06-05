import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Header from "./Header";

describe("Given a Header Component", () => {
  describe("When its called to be rendered with a user logged in", () => {
    test("Then it should create a Header Component with 5 list components and an image", () => {
      const action = {
        type: "user/login",
        payload: {
          firstName: "test",
          email: "test@gmail.com",
          id: "test",
          iat: 1111111,
        },
      };

      store.dispatch(action);

      const finishedLoadingaction = {
        type: "ui/finishedLoading",
      };

      store.dispatch(finishedLoadingaction);

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
    test("Then dispatch the logout action, changing the status of the user login payload to 'false' in the 'logged' property", () => {
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

  describe("When its called to be rendered and its loading after a request to the api", () => {
    const secondAction = {
      type: "ui/loading",
    };

    store.dispatch(secondAction);
    test("Then it should render a logo image with the name", () => {
      const totalImages = 1;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const displayImage = screen.getAllByRole("img");

      expect(displayImage).toHaveLength(totalImages);
    });
  });
});
