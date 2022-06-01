import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { loginActionCreator } from "./redux/features/userSlice";
import store from "./redux/store/store";
import { loginUserThunk } from "./redux/thunks/userThunks";

const saveToStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

let localStorageMock = (() => {
  let store: { [key: string]: any } = {};
  return {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key: string) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("Given an App component", () => {
  describe("When its invoked with a Login Page and with a real token already in the local storage", () => {
    saveToStorage(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZSIsImlkIjoiMTIzNCIsImlhdCI6MTY1NDAxODg5Nn0.tYg1N6xwNhOSXGJdOHbHhyJcaU6uSTwYUKElRrh-Tbs"
    );

    test("Then it should render with a token in its local storage and dispatch a login action that will decrypt the token with the user information and that data will be in the store", () => {
      const expectedTokenData = {
        user: {
          firstName: "test",
          email: "teste@teste",
          id: "1234",
          iat: 1654018896,
          logged: true,
        },
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const getStoreActionState = store.getState();

      expect(window.localStorage.getItem("token")).toBe(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZSIsImlkIjoiMTIzNCIsImlhdCI6MTY1NDAxODg5Nn0.tYg1N6xwNhOSXGJdOHbHhyJcaU6uSTwYUKElRrh-Tbs"
      );
      expect(getStoreActionState).toStrictEqual(expectedTokenData);
    });
  });
});
