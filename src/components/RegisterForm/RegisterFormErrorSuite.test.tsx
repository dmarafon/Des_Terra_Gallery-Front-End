import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a RegisterForm component function", () => {
  describe("When the user does not type in any of the required  clicks the checkbox", () => {
    test("Then an action is dispatched opening a modal to warn the user", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );
      const registerButton = screen.getByRole("button", { name: "REGISTER" });
      userEvent.click(registerButton);
      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Blank",
        };
        store.dispatch(uIaction);
      });
      expect(mockDispatch).toHaveBeenCalled();
      const closeModal = screen.getByRole("button", {
        name: /×/i,
      });
      userEvent.click(closeModal);
      const element = screen.getByTestId("custom-element");
      expect(element).toBeInTheDocument();
    });
  });
});
