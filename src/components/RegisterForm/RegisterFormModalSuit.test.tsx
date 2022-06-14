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

describe("Given a RegisterForm", () => {
  const textInput = [
    "Marcos",
    "Messias",
    "test@test.com",
    "123456",
    "carrer de test, 101",
    "Barcelona",
    "111111111",
  ];
  describe("When the user fills the password field and leaves the email field in blank", () => {
    test("TThen the dispatch should be invoked in both instances and the form will be submitted succesfully warning the user with a modal", async () => {
      const fakeFile = new File(["test"], "test.png", {
        type: "image/png",
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const firstnameInput = screen.getByLabelText("FIRST NAME");
      const surnameInput = screen.getByLabelText("SURNAME");
      const emailInput = screen.getByLabelText("EMAIL");
      const passwordInput = screen.getByLabelText("PASSWORD");
      const addressInput = screen.getByLabelText("ADDRESS & NUMBER");
      const cityInput = screen.getByLabelText("CITY");
      const phoneInput = screen.getByLabelText("PHONE NUMBER");
      const checkboxInput = screen.getByRole("checkbox", {
        name: "I'm an Artist and I want to Sell My Work",
      });

      const registerButton = screen.getByRole("button", { name: "REGISTER" });

      const inputFile = screen.getByLabelText(/picture profile \(optional\)/i);

      userEvent.upload(inputFile, fakeFile);

      fireEvent.click(checkboxInput);
      userEvent.type(firstnameInput, textInput[0]);
      userEvent.type(surnameInput, textInput[1]);
      userEvent.type(emailInput, textInput[2]);
      userEvent.type(passwordInput, textInput[3]);
      userEvent.type(addressInput, textInput[4]);
      userEvent.type(cityInput, textInput[5]);
      userEvent.type(phoneInput, textInput[6]);

      userEvent.click(registerButton);

      await waitFor(() => {
        const uIaction = {
          type: "ui/loading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/finishedLoading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "new",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalled();

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
        };

        store.dispatch(uIaction);
      });
    });
  });
});
