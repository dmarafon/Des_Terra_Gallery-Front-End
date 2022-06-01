import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { localStorageMock } from "./mocks/localStorageMock";
import store from "./redux/store/store";

const gettinUpLocalStorage = localStorageMock;
const saveToStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

Object.defineProperty(window, "localStorage", {
  value: gettinUpLocalStorage,
});

describe("Given an App component", () => {
  describe("When its invoked with a Login Page and without a token in the local storage", () => {
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });

    saveToStorage("");

    test("Then it should render without a token in its local storage and will call the logout action, and hence there will not be any user information in the store", () => {
      const getStoreActionState = store.getState();
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const expectedTokenData = {
        user: { id: "", firstName: "", email: "", logged: false },
      };

      expect(getStoreActionState).toStrictEqual(expectedTokenData);

      expect(window.localStorage.getItem("token")).toBe("");
    });
  });
});
