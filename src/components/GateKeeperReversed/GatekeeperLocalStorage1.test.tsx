import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { localStorageMock } from "../../mocks/localStorageMock";
import store from "../../redux/store/store";
import GatekeeperReversed from "./GatekeeperReversed";

const gettinUpLocalStorage = localStorageMock;

const saveToStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

Object.defineProperty(window, "localStorage", {
  value: gettinUpLocalStorage,
});

const mockUseNavigate = jest.fn();

describe("Given a LoggedChecked function", () => {
  describe("When it's invoked there is a user logged with a token", () => {
    saveToStorage(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZSIsImlkIjoiMTIzNCIsImlhdCI6MTY1NDAxODg5Nn0.tYg1N6xwNhOSXGJdOHbHhyJcaU6uSTwYUKElRrh-Tbs"
    );

    test("Then it should not render its children when the user is logged", () => {
      jest.mock("react-router-dom", () => ({
        useNavigate: () => mockUseNavigate,
      }));
      render(
        <BrowserRouter>
          <Provider store={store}>
            <GatekeeperReversed>
              <h1>TEST</h1>
            </GatekeeperReversed>
          </Provider>
        </BrowserRouter>
      );

      expect(mockUseNavigate).not.toHaveBeenCalledWith("/");
    });
  });
});
