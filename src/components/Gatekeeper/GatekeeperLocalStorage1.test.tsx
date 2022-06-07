import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { localStorageMock } from "../../mocks/localStorageMock";
import store from "../../redux/store/store";
import Gatekeeper from "./Gatekeeper";

const mockUseNavigate = jest.fn();

const gettinUpLocalStorage = localStorageMock;

const saveToStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

Object.defineProperty(window, "localStorage", {
  value: gettinUpLocalStorage,
});

describe("Given a LoggedChecked function", () => {
  describe("When it's invoked there is a user logged with a token", () => {
    saveToStorage(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZSIsImlkIjoiMTIzNCIsImlhdCI6MTY1NDAxODg5Nn0.tYg1N6xwNhOSXGJdOHbHhyJcaU6uSTwYUKElRrh-Tbs"
    );

    test("Then it should render its children when the user is logged", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { logged: true },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <Gatekeeper>
              <h1>TEST</h1>
            </Gatekeeper>
          </Provider>
        </BrowserRouter>
      );

      const receivedText = screen.getByRole("heading", {
        level: 1,
        name: /TEST/i,
      });

      expect(receivedText).toBeInTheDocument();
    });
  });
});
