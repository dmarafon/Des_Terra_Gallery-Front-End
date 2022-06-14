import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Login Page", () => {
  describe("When the user fills the password field and leaves the email field in blank", () => {
    test("Then the login button should be enabled", async () => {
      const textInput = ["", "1234"];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameField = screen.getByLabelText("EMAIL");
      const passwordField = screen.getByLabelText("PASSWORD");

      const signInButton = screen.getByRole("button", { name: "SIGN IN" });

      userEvent.type(usernameField, textInput[0]);
      userEvent.type(passwordField, textInput[1]);

      userEvent.click(signInButton);

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Email Blank",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();
    });
  });

  describe("When the user fills the name, username and password fields", () => {
    test("Then the login button should be enabled", async () => {
      const textInput = ["jose", ""];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameField = screen.getByLabelText("EMAIL");
      const passwordField = screen.getByLabelText("PASSWORD");

      const signInButton = screen.getByRole("button", { name: "SIGN IN" });

      userEvent.type(usernameField, textInput[0]);
      userEvent.type(passwordField, textInput[1]);

      expect(signInButton).not.toBeDisabled();

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Password Blank",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();
    });
  });
});
