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
    test("Then it should call the loading action and dispatch the action to call the modal", async () => {
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
          payload: "Email Blank",
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

describe("When the user fills the email and leaves the password field in blank", () => {
  test("Then it should call the loading action and dispatch the action to call the modal", async () => {
    const textInput = ["jose@gmail.com", ""];

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
        payload: "Password Blank",
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

describe("When the user fills the email and  the password is less than 5 characters", () => {
  test("Then it should call the loading action and dispatch the action to call the modal", async () => {
    const textInput = ["jose@gmail.com", "1234"];

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

  describe("When the user fills the email and  the password is equal to 5 characters", () => {
    test("Then it should call the loading action and dispatch the action to call the modal", async () => {
      const textInput = ["jose@gmail.com", "12345"];

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

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When an unknown error occurs in the server", () => {
    test("Then it should call the loading action and dispatch the action to call the modal", async () => {
      const textInput = ["jose", "12345"];

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

  describe("When the user inputs an invalid email without an '@'", () => {
    test("Then it should call the loading action and dispatch the action to call the modal", async () => {
      const textInput = ["joseperea.com", "12345"];

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
});
