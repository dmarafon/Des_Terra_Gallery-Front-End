import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

const mockDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockDispatch,
}));

const mockUseNavigate = jest.fn();

describe("Given a Login Page", () => {
  describe("When it's invoked and an user clicks on the 'Login' button and login successfully", () => {
    test("Then it should be redirectioned to the Home Page", async () => {
      const textInput = ["jesusperea@gmail.com", "1234"];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );
      const usernameField = screen.getByLabelText("EMAIL");
      const passwordField = screen.getByLabelText("PASSWORD");

      userEvent.type(usernameField, textInput[0]);
      userEvent.type(passwordField, textInput[1]);

      const signInButton = screen.getByRole("button", { name: "SIGN IN" });
      userEvent.click(signInButton);

      await waitFor(() => {
        const userLoggin = {
          type: "user/login",
          payload: {
            firstName: "jesus",
            email: "jesusperea@gmail.com",
            id: "6295020ad1504446d0c04ce8",
            iat: 1654950055,
          },
        };
        store.dispatch(userLoggin);

        expect(mockDispatch).toHaveBeenCalledWith("/home");
      });
    });
  });
});
