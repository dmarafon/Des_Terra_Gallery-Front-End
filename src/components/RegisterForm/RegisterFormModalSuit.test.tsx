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
  describe("When the user fills all the fields correctly", () => {
    const textInput = [
      "Marcos",
      "Messias",
      "test@test.com",
      "123456",
      "carrer de test, 101",
      "Barcelona",
      "111111111",
    ];
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

  describe("When the user fills all the fields correctly, besides the email, adding an invalid email address", () => {
    const textInput = [
      "Marcos",
      "Messias",
      "test",
      "123456",
      "carrer de test, 101",
      "Barcelona",
      "111111111",
    ];
    test("Then the dispatch should be invoked in both instances and the form will not be submited and the user will be warned with a modal", async () => {
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
          payload: "Email Invalid",
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

  describe("When the user fills all the fields correctly, but an error happens in the server", () => {
    const textInput = [
      "Marcos",
      "Messias",
      "test@test.com",
      "123456",
      "carrer de test, 101",
      "Barcelona",
      "111111111",
    ];
    test("Then the dispatch should be invoked in both instances and the form will not be submited and the user will be warned with a modal", async () => {
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
          payload: "Unknown Error",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Unknown Error",
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

  describe("When the user fills the form with a password shorter than 5 digits", () => {
    const textInput = [
      "Marcos",
      "Messias",
      "test@test.com",
      "1234",
      "carrer de test, 101",
      "Barcelona",
      "111111111",
    ];
    test("Then the dispatch should be invoked in both instances and the form will not be submited and the user will be warned with a modal", async () => {
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
          payload: "Password Length",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Unknown Error",
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

  describe("When the user fills the form without a firstname", () => {
    const textInput = [
      "",
      "Messias",
      "test@test.com",
      "12345",
      "carrer de test, 101",
      "Barcelona",
      "111111111",
    ];
    test("Then the dispatch should be invoked in both instances and the form will not be submited and the user will be warned with a modal", async () => {
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
          payload: "Blank 'First Name'",
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

  describe("When the user fills the form without a surname", () => {
    const textInput = [
      "jose",
      "",
      "test@test.com",
      "12345",
      "carrer de test, 101",
      "Barcelona",
      "111111111",
    ];
    test("Then the dispatch should be invoked in both instances and the form will not be submited and the user will be warned with a modal", async () => {
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
          payload: "Blank 'Surname'",
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

  describe("When the user fills the form without an email", () => {
    const textInput = [
      "jose",
      "messias",
      "",
      "12345",
      "carrer de test, 101",
      "Barcelona",
      "111111111",
    ];
    test("Then the dispatch should be invoked in both instances and the form will not be submited and the user will be warned with a modal", async () => {
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
          payload: "Blank 'Email'",
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

  describe("When the user fills the form without a password", () => {
    const textInput = [
      "jose",
      "messias",
      "test@test.com",
      "",
      "carrer de test, 101",
      "Barcelona",
      "111111111",
    ];
    test("Then the dispatch should be invoked in both instances and the form will not be submited and the user will be warned with a modal", async () => {
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
          payload: "Blank 'Password'",
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

  describe("When the user fills the form without an address & number", () => {
    const textInput = [
      "jose",
      "messias",
      "test@test.com",
      "12345",
      "",
      "Barcelona",
      "111111111",
    ];
    test("Then the dispatch should be invoked in both instances and the form will not be submited and the user will be warned with a modal", async () => {
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
          payload: "Blank 'Address & Number'",
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

  describe("When the user fills the form without a city", () => {
    const textInput = [
      "jose",
      "messias",
      "test@test.com",
      "12345",
      "carrer de test, 45",
      "",
      "111111111",
    ];
    test("Then the dispatch should be invoked in both instances and the form will not be submited and the user will be warned with a modal", async () => {
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
          payload: "Blank 'City'",
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

  describe("When the user fills the form without a phone number", () => {
    const textInput = [
      "jose",
      "messias",
      "test@test.com",
      "12345",
      "carrer de test, 45",
      "Barcelona",
      "",
    ];
    test("Then the dispatch should be invoked in both instances and the form will not be submited and the user will be warned with a modal", async () => {
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
          payload: "Blank 'Phone Number'",
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
