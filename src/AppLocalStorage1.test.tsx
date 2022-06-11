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
  describe("When its invoked with a Login Page and with a real token already in the local storage", () => {
    saveToStorage(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZSIsImlkIjoiMTIzNCIsImlhdCI6MTY1NDAxODg5Nn0.tYg1N6xwNhOSXGJdOHbHhyJcaU6uSTwYUKElRrh-Tbs"
    );

    test("Then it should render with a token in its local storage and dispatch a login action that will decrypt the token with the user information and that data will be in the store", () => {
      const expectedTokenData = {
        ui: {
          feedback: false,
          loading: false,
          apiResponse: "",
        },
        user: {
          firstName: "test",
          email: "teste@teste",
          id: "1234",
          iat: 1654018896,
          logged: true,
        },
        artworks: [],
        userArtworks: [],
        singleArtwork: {
          author: [
            {
              firstname: "",
              surname: "",
            },
          ],
          description: "",
          height: "",
          id: "",
          image: "",
          imagebackup: "",
          medium: "",
          monthlyrateprice: "",
          purchaseprice: "",
          style: "",
          title: "",
          width: "",
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
