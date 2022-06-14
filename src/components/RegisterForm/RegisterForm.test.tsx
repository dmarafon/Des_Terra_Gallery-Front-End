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
  describe("When invoked", () => {
    test("Then it should render 10 input fields and 1 button", () => {
      const expectedNumberOfButtons = 1;

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
      const webpageInput = screen.getByLabelText("WEB PAGE (OPTIONAL)");
      const pictureprofileInout = screen.getByLabelText(
        "PICTURE PROFILE (OPTIONAL)"
      );
      const addressInput = screen.getByLabelText("ADDRESS & NUMBER");
      const apartmentInput = screen.getByLabelText(
        "APARTMENT, DOOR, STAIR (OPTIONAL)"
      );
      const cityInput = screen.getByLabelText("CITY");
      const phoneInput = screen.getByLabelText("PHONE NUMBER");

      const buttons = screen.getAllByRole("button");

      expect(firstnameInput).toBeInTheDocument();
      expect(surnameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(webpageInput).toBeInTheDocument();
      expect(pictureprofileInout).toBeInTheDocument();
      expect(addressInput).toBeInTheDocument();
      expect(apartmentInput).toBeInTheDocument();
      expect(cityInput).toBeInTheDocument();
      expect(phoneInput).toBeInTheDocument();

      expect(buttons).toHaveLength(expectedNumberOfButtons);
    });
  });

  describe("When the user types 'My Name' in the firstname input field", () => {
    test("Then its value should be 'My Name", () => {
      const inputText = "My Name";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const inputField = screen.getByLabelText("FIRST NAME");

      expect(inputField).toBeInTheDocument();

      userEvent.type(inputField, inputText);

      expect(inputField).toHaveValue(inputText);
    });
  });

  describe("When the user fills all the required fields, clicks the checkbox, the submit button becames enabled and the user clicks in the mentioned button, opening a modal. When the modal is closed it will close the modal as well", () => {
    test("Then the dispatch should be invoked in both instances", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

      const textInput = [
        "Test",
        "Test",
        "test@test.com",
        "1234",
        "carrer de test, 101",
        "Barcelona",
        "111111111",
      ];
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
          type: "ui/apiResponse",
          payload: "new",
        };

        store.dispatch(uIaction);
      });

      expect(mockDispatch).toHaveBeenCalled();

      const closeModal = screen.getByRole("button", {
        name: /×/i,
      });

      userEvent.click(closeModal);

      const element = screen.getByTestId("custom-element");

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
          payload: "new",
        };

        store.dispatch(uIaction);
      });

      expect(element).not.toBeInTheDocument();
    });
  });

  describe("When the user fills all the required fields, clicks the checkbox, the submit button becames enabled and the user clicks in the button with an user already present in the database, opening a modal warning. When the modal is closed it will close the modal as well", () => {
    test("Then the dispatch should be invoked in both instances", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

      const textInput = [
        "Test",
        "Test",
        "test@test.com",
        "1234",
        "carrer de test, 101",
        "Barcelona",
        "111111111",
      ];
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
          type: "ui/apiResponse",
          payload: "User alr",
        };

        store.dispatch(uIaction);
      });

      expect(mockDispatch).toHaveBeenCalled();

      const closeModal = screen.getByRole("button", {
        name: /×/i,
      });

      userEvent.click(closeModal);

      const element = screen.getByTestId("custom-element");

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
          payload: "new",
        };

        store.dispatch(uIaction);
      });

      expect(element).not.toBeInTheDocument();
    });
  });
  describe("When the user fills all the required fields, and uploads an image, clicks the checkbox, the submit button becames enabled and the user clicks in the mentioned button, opening a modal. When the modal is closed it will close the modal as well", () => {
    test("Then the dispatch should be invoked in both instances", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

      const textInput = [
        "Test",
        "Test",
        "test@test.com",
        "1234",
        "carrer de test, 101",
        "Barcelona",
        "111111111",
      ];
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
          type: "ui/apiResponse",
          payload: "new",
        };

        store.dispatch(uIaction);
      });

      expect(mockDispatch).toHaveBeenCalled();

      const closeModal = screen.getByRole("button", {
        name: /×/i,
      });

      userEvent.click(closeModal);

      const element = screen.getByTestId("custom-element");

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
          payload: "new",
        };

        store.dispatch(uIaction);
      });

      expect(element).not.toBeInTheDocument();
    });
  });

  describe("When the user fills all the required fields, and uploads an image, clicks the checkbox, the submit button becames enabled and the user clicks in the mentioned button, opening a loading modal. When the loading aciont is closed it will close the modal as well", () => {
    test("Then the dispatch should be invoked in both instances", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

      const textInput = [
        "Test",
        "Test",
        "test@test.com",
        "1234",
        "carrer de test, 101",
        "Barcelona",
        "111111111",
      ];
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

      const element = screen.getByTestId("custom-element");

      await waitFor(() => {
        const uIaction = {
          type: "ui/finishedLoading",
        };

        store.dispatch(uIaction);
      });

      expect(mockDispatch).toHaveBeenCalled();

      expect(element).not.toBeInTheDocument();
    });
  });
});
