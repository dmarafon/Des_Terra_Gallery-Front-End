import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Login form", () => {
  describe("When it's invoked", () => {
    test("Then it renders one label with the text 'EMAIL'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getAllByText("EMAIL")).toHaveLength(1);
    });
  });

  describe("When it's invoked and an user clicks on the 'Login' button", () => {
    test("Then it should call the dispatch function", () => {
      const textInput = ["jose", "1234"];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );
      const usernameField = screen.getByLabelText("EMAIL");
      const passwordField = screen.getByLabelText("PASSWORD");

      userEvent.type(usernameField, textInput[0]);
      userEvent.type(passwordField, textInput[1]);

      const signInButton = screen.getByRole("button", { name: "SIGN IN" });
      userEvent.click(signInButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
  describe("When the user fills the name, username and password fields", () => {
    test("Then the register button should be enabled", () => {
      const textInput = ["jose", "1234"];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const usernameField = screen.getByLabelText("EMAIL");
      const passwordField = screen.getByLabelText("PASSWORD");

      const signInButton = screen.getByRole("button", { name: "SIGN IN" });

      userEvent.type(usernameField, textInput[0]);
      userEvent.type(passwordField, textInput[1]);

      expect(signInButton).not.toBeDisabled();
    });
  });
});
